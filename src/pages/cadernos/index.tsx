import { Container, Content, Search } from '../../components/styles/cadernos';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';

import notebook from '@/assets/Notebook.png'
import { NotebookCard } from '@/components/NotebookCard';
import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';

import { toast } from "react-toastify"

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

const createNotebookMutation = graphql(/* GraphQL */ `
  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {
    addNotebook(
      name: $name
      description: $description
      questions: $questions
    ) {
      id
      name
      description
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
  const [, executeCreateNotebook] = useMutation(createNotebookMutation)
  const [, executeDeleteNotebook] = useMutation(deleteNotebookMutation)

  const { data } = result

  const _addNotebook = async () => {
    await executeCreateNotebook({ name: "Título", description: "Descrição", questions: [] })
    executeQuery({ requestPolicy: "network-only" })
  }

  const addNotebook = async () => {
    toast.promise(
      _addNotebook(),
      {
        error: "Ocorreu um erro ao criar o caderno",
        pending: "Criando caderno",
        success: "Caderno criado com sucesso"
      }
    )
  }

  const _deleteNotebook = async (id: string) => {
    await executeDeleteNotebook({ id })
    executeQuery({ requestPolicy: "network-only" })
  }

  const deleteNotebook = async (id: string) => {
    toast.promise(
      _deleteNotebook(id),
      {
        error: "Ocorreu um erro ao deleta o caderno",
        pending: "Deletando caderno",
        success: "Caderno deletado com sucesso"
      }
    )
  }

  return (
    <Container>
      <Header/>
      <Menu page=''/>
      <Content>
        <Search>
          <SearchInput/>
          <Button onClick={() => addNotebook()}>+ Criar Caderno</Button>
        </Search>
        <DefaultSearchPage
          text={(data?.notebooks.length || 0) > 0 ? 'Meus cadernos' : 'Crie um caderno para você!'}
          picture={notebook} alt='Mulher escrevendo informações em um carderno'
          content={(data?.notebooks!.length || 0) > 0}
        >
          {data?.notebooks && data.notebooks.map(notebook => (
            <NotebookCard
              edit
              id={notebook.id}
              key={notebook.id}
              title={notebook.name}
              description={notebook.description!}
              questions={notebook.questions}
              deleteClick={() => deleteNotebook(notebook.id)}
            />
          ))}
        </DefaultSearchPage>
      </Content>
    </Container>
  )
}
