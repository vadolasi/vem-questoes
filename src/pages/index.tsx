import Image from 'next/image';
import {AiOutlineRightCircle} from 'react-icons/ai'

import { Container, Content,OfferCard } from './styles';

import mulherComNotebook from '@/assets/mulherComNotebook.png'

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { ContentCard } from '@/components/ContentCard';
import { UserCard } from '@/components/UserCard';
import { ExamCard } from '@/components/ExamCard';
import { graphql } from '@/gql';
import { useQuery } from 'urql';

const initialPagerQuery = graphql(/* GraphQL */ `
  query InitialPage {
    leaderBoard {
      id
      name
      totalQuestions
      totalCorrect
    }
    simulados {
      simulados {
        name
        totalQuestions
      }
    }
  }
`);

export default function Home() {
  const [result] = useQuery({ query: initialPagerQuery })

  const { data } = result

  return (
    <Container>
     <Header/>
     <Menu page='home'/>

     <Content>
          <ContentCard title='Leaderboard'>
            {data?.leaderBoard?.map(({ id, name, totalQuestions, totalCorrect }, index) => (
              <UserCard key={id} position={index + 1} name={name} goals={totalCorrect} questions={totalQuestions} />
            ))}
          </ContentCard>
          <OfferCard>
            <div className='Header'>
                <div>
                    <h1>Diagnóstico de Desempenho</h1>
                    <p>Saiba exatamente o que você domina!</p>
                    <button>Iniciar agora <AiOutlineRightCircle/></button>
                </div>
                <Image src={mulherComNotebook} alt="Mulher segurando um notebook"/>
            </div>
          </OfferCard>
          <ContentCard title='Estatísticas'>
          </ContentCard>
          <ContentCard title='Simulados'>
            {data?.simulados.simulados.map(simulado => (
              <ExamCard name={simulado.name} questions={simulado.totalQuestions} />
            ))}
          </ContentCard>
     </Content>
    </Container>
  )
}
