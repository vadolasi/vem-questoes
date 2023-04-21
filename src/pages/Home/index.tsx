import Image from 'next/image';
import {AiOutlineRightCircle} from 'react-icons/ai'

import { Container, Content,OfferCard } from './styles';

import mulherComNotebook from '@/assets/mulherComNotebook.png'

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { ContentCard } from '@/components/ContentCard';
import { UserCard } from '@/components/UserCard';
import { ExamCard } from '@/components/ExamCard';

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu/>

     <Content>
          <ContentCard title='Leaderboard'>
            <UserCard position={1} name='fokdokf dokfo' goals={10} questions={20}/>
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
            <ExamCard name="simulado" questions={30} time='2:30'/>
          </ContentCard>
     </Content>
    </Container>
  )
}
