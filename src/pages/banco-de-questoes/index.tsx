import { Container, Content, MatterMenu } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Filter } from '@/components/Filter';
import { MatterCard } from '@/components/MatterCard';

export default function questoes() {
  return (
    <Container>
     <Header/>
     <Menu page='banco-de-questoes'/>
     <Content>
        <Filter/>
        <div className='MatterWrap'>
          <h1>Respiração</h1>
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='blue'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='blue'/></li>
          </MatterMenu>
        </div>
        <div className='MatterWrap'>
          <h1>Teste</h1>
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='red'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='red'/></li>
          </MatterMenu>
        </div>
        <div className='MatterWrap'>
          <h1>Ai mds</h1>
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='green'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='green'/></li>
          </MatterMenu>
        </div>
     </Content>
    </Container>
  )
}

