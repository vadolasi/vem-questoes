import { Search } from '../../components/styles/raio-x';

import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { XrayButton } from '@/components/XrayButton'

import raioX from '@/assets/raiox.png'
import Layout from '@/components/layout';
import { graphql } from '@/gql';
import { useQuery } from 'urql';
import { useState } from 'react';

const raioXQuery = graphql(/* GraphQL */ `
  query RaioX($provaId: String!) {
    raioX(provaId: $provaId) {
      area {
        id
        name
      }
      relevancia
      desempenho
    }
  }
`)

const processosSeletivosQuery = graphql(/* GraphQL */ `
  query ProcessosSeletivos {
    processosSeletivos {
      id
      name
    }
  }
`)

export default function Home() {
  const [firstLoad, setFirstLoad] = useState(true)
  const [provaId, setProvaId] = useState<string | null>(null)
  const [{ data, fetching }] = useQuery({ query: raioXQuery, variables: { provaId: provaId || "" }, pause: provaId === null })
  const [{ data: provas, fetching: loadingProvas }] = useQuery({ query: processosSeletivosQuery })

  return (
    <Layout page="raiox">
      <div className="flex flex-col w-full items-center">
      <Search>
        <SearchInput/>
        <Select label='Processo seletivo' options={[...(provas?.processosSeletivos || []).map(prova => ({ option: prova.name, value: prova.id }))]} onChange={ev => setProvaId(ev.currentTarget.value)} />
        <Button>Buscar</Button>
      </Search>
      <DefaultSearchPage text='Raio-X completo da sua prova!' picture={raioX} alt='Mulher avaliando informações sobre algo' content={(data?.raioX.length || 0) > 0}>
        {data && data.raioX.map(raioX => (
          <XrayButton
            key={raioX.area.id}
            disciplina={raioX.area.name}
            relevancia={raioX.relevancia}
            desempenho={raioX.desempenho}
            assuntos={[]}
          />
        ))}

      </DefaultSearchPage>
      </div>
    </Layout>
  )
}
