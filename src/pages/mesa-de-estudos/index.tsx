
import { Container, Content } from './styles';

import study from '../../assets/table/study.png';
import notebook from '../../assets/table/Notebook.png';
import teste from '../../assets/table/test.png';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { TableCard } from '@/components/TableCard';

export default function Table() {
  return (
    <Container>
     <Header/>
     <Menu page='mesa-de-estudos'/>
     <Content>
      <TableCard title='Resolver Questões!' picture={study} link='/banco-de-questoes' description='Garoto estudando em uma mesa'/>
      <TableCard title='Meus Cadernos!' picture={notebook} link='/cadernos' description='Garota estudando com um caderno aberto'/>
      <TableCard title='Meus Simulados!' picture={teste} link='/simulados' description='Garota resolvendo uma prova'/>
     </Content>
    </Container>
  )
}



