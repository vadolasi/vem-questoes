import { Container, Content } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { ContentCard } from '@/components/ContentCard';

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu/>

     <Content>
          <ContentCard title='Leaderboard'>
            AAAAAAA
          </ContentCard>
     </Content>
    </Container>
  )
}
