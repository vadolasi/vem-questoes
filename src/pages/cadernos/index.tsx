import { Search } from '../../components/styles/cadernos';

import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';

import notebook from '@/assets/Notebook.png'
import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';

import Layout from '@/components/layout';
import Notebooks from '@/components/Notebooks';
import { useEffect } from 'react';
import { useModal } from '@/components/Modal';
import AddNotebookModal from '@/components/Notebooks/AddNotebook';

const notebooksQuery = graphql(/* GraphQL */ `
  query NotebooksQuery {
    notebooks {
      id
      name
      description
      questions {
        id
      }
    }
  }
`);

const deleteNotebookMutation = graphql(/* GraphQL */`
  mutation DeleteNotebook($id: String!) {
    deleteNotebook(id: $id)
  }
`)

export default function Home() {
  const [result, executeQuery] = useQuery({ query: notebooksQuery, requestPolicy: "cache-and-network" })
  const [showAddNotebookModal, updateAddNotebookModal, closeAddNotebookModal] = useModal(<></>, { bottom: false })

  const { data, fetching } = result

  const onAdd = () => {
    executeQuery({ requestPolicy: "network-only" })
    closeAddNotebookModal()
  }

  useEffect(() => {
    updateAddNotebookModal(<AddNotebookModal onAdd={onAdd} />)
  }, [])

  return (
    <Layout page="cadernos">
      <div className="flex flex-col w-full items-center">
        <Search>
          <SearchInput/>
          <Button onClick={showAddNotebookModal}>+ Criar Caderno</Button>
        </Search>
        <DefaultSearchPage
          text={(data?.notebooks.length || 0) > 0 ? 'Meus cadernos' : 'Crie um caderno para você!'}
          picture={notebook} alt='Mulher escrevendo informações em um carderno'
          content={(data?.notebooks!.length || 0) > 0}
          loading={fetching}
        >
          <Notebooks />
        </DefaultSearchPage>
      </div>
    </Layout>
  )
}
