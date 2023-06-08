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
  const [result, executeQuery] = useQuery({ query: notebooksQuery })
  const [, executeCreateNotebook] = useMutation(createNotebookMutation)
  const [, executeDeleteNotebook] = useMutation(deleteNotebookMutation)

  const { data } = result

  const addNotebook = async () => {
    await executeCreateNotebook({ name: "Título", questions: [] })
    executeQuery({ requestPolicy: "network-only" })
  }

  const deleteNotebook = async (id: string) => {
    await executeDeleteNotebook({ id })
    executeQuery({ requestPolicy: "network-only" })
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
        <DefaultSearchPage text={(data?.notebooks.length || 0) > 0 ? 'Meus cadernos' : 'Crie um caderno para você!'} picture={notebook} alt='Mulher escrevendo informações em um carderno' content={(data?.notebooks!.length || 0) > 0}>
          {data?.notebooks && data.notebooks.map((notebook, index) => (
            <NotebookCard id={notebook.id} key={notebook.id} title={notebook.name} description={notebook.description!} questions={notebook.questions} deleteClick={() => deleteNotebook(notebook.id)}/>
          ))}
        </DefaultSearchPage>
     </Content>
    </Container>
  )
}
