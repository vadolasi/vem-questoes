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
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='blue'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='blue'/></li>
          </MatterMenu>
        </div>
        <div className='MatterWrap'>
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='red'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='red'/></li>
          </MatterMenu>
        </div>
        <div className='MatterWrap'>
          <MatterMenu>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='green'/></li>
          <li><MatterCard title='Exemplo EXEMPLO' number={10} color='green'/></li>
          </MatterMenu>
        </div>
     </Content>
    </Container>
  )
}

