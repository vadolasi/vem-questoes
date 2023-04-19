import { Container, Content } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { ContentCard } from '@/components/ContentCard';
import { UserCard } from '@/components/UserCard';

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu/>

     <Content>
          <ContentCard title='Leaderboard'>
            <UserCard position={1} name='fokdokf dokfo' goals={10} questions={20}/>
          </ContentCard>
          <ContentCard title='Estatísticas'>
          </ContentCard>
          <ContentCard title='Simulados'>
          </ContentCard>
     </Content>
    </Container>
  )
}
