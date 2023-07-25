import { Container, Page } from "../../../components/styles/questao"
import { ListUserCard } from '../../../components/ListUserCard'
import { graphql } from "@/gql";
import { useQuery } from "urql";

const usuariosQuerys = graphql(/* GraphQL */ `
  query Users {
    users {
      id
      photoUrl
      name
      email
      role
    }
  }
`)

export default function Admin() {
  const [result] = useQuery({ query: usuariosQuerys })

  const { data: users } = result

  return (
    <Container>
        <Page>
         <header>
          <h1>Lista de usuários</h1>
          <p>Tenha controle dos seus usuários</p>
         </header>
        <div className="Main">
          {users?.users.map(user => (
            <ListUserCard key={user.id} id={user.id} image={user.photoUrl} name={user.name} email={user.email} role={user.role.toLowerCase()} />
          ))}
        </div>
        </Page>
    </Container>
  )
}
