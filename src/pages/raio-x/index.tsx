import Image from 'next/image';

import { Container, Content, Search } from '../../components/styles/raio-x';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { XrayButton } from '@/components/XrayButton'


import raioX from '@/assets/raiox.png'
import Layout from '@/components/layout';

export default function Home() {
  const response = [
    {
    disciplina: 'Respiração',
    relevancia: 20,
    desempenho: 20,
    assuntos: [
      {
      assunto: 'assunto 1',
      relevancia: 20
      },
      {
      assunto: 'assunto 2',
      relevancia: 20
      },
    ]
  },
    {
    disciplina: 'Trauma',
    relevancia: 50,
    desempenho: 32,
    assuntos: [
      {
      assunto: 'assunto 1',
      relevancia: 20
      },
      {
      assunto: 'assunto 2',
      relevancia: 20
      },
    ]
  },
]

  return (
    <Layout page="raiox">
      <div className="flex flex-col w-full items-center">
      <Search>
        <SearchInput/>
        <Select label='Buscar por' options={[{ option: 'banca', value: 'banca' }, { option: 'prova', value: 'prova' }]}/>
        <Button>Buscar</Button>
      </Search>
      <DefaultSearchPage text='Raio-X completo da sua prova!' picture={raioX} alt='Mulher avaliando informações sobre algo' content={response.length > 0}>
        {response && response.map(response => (
          <XrayButton
          key={String(response)}
          disciplina={response.disciplina}
          relevancia={response.relevancia}
          desempenho={response.desempenho}
          assuntos={response.assuntos}/>
        ))}

      </DefaultSearchPage>
      </div>
    </Layout>
  )
}
