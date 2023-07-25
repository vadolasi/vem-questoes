import study from '../../assets/table/study.png';
import notebook from '../../assets/table/Notebook.png';
import teste from '../../assets/table/test.png';

import { TableCard } from '@/components/TableCard';
import Layout from '@/components/layout';
import { Content } from '@/components/styles/mesa-de-estudos';

export default function Table() {
  return (
    <Layout page="mesa-de-estudos">
      <Content>
        <TableCard title='Resolver Questões!' picture={study} link='/banco-de-questoes' description='Garoto estudando em uma mesa'/>
        <TableCard title='Meus Cadernos!' picture={notebook} link='/cadernos' description='Garota estudando com um caderno aberto'/>
        <TableCard title='Meus Simulados!' picture={teste} link='/simulados' description='Garota resolvendo uma prova'/>
      </Content>
    </Layout>
  )
}
