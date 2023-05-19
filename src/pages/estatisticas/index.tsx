import { Container, Content } from '../../components/styles/estatisticas';


import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";

export default function Table() {
  return (
    <Container>
     <Header/>
     <Menu page='estatisticas'/>
     <Content>
           <h1>Analise Geral</h1>
           <div>
            
           </div>
     </Content>
    </Container>
  )
}



