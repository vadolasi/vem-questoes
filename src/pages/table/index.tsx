import Image from 'next/image';
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
     <Menu/>
     <Content>
      <TableCard title='Resolver Questões!' picture={study} link='' description='Garoto estudando em uma mesa'/>
      <TableCard title='Meus Cadernos!' picture={notebook} link='' description='Garota estudando com um caderno aberto'/>
      <TableCard title='Meus Simulados!' picture={teste} link='' description='Garota resolvendo uma prova'/>
     </Content>
    </Container>
  )
}



