import { useState } from "react"
import { Container, Page } from "../../../components/styles/questao"
import { ListUserCard } from '../../../components/ListUserCard'
import { graphql } from "@/gql";
import { useMutation } from "urql";
import { Role } from "@/gql/graphql";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


import cover from '../../../assets/cover.png'

const createUserMutation = graphql(/* GraphQL */`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $role: Role!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      role: $role
    ) {
      id
    }
  }
`)

export default function Admin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const [, execute] = useMutation(createUserMutation)

  const router = useRouter()

  const onSubmit = async () => {
    const result = await execute({
      name,
      email,
      password,
      role: role as Role
    })

    if (result.data?.createUser.id) {
      toast("Usuário criado com sucesso!", { type: "success" })
      router.push("/admin")
    }
  }

  return (
    <Container>
        <Page>
         <header>
          <h1>Lista de usuários</h1>
          <p>Tenha controle dos seus usuários</p>
         </header>
        <div className="Main">
            <ListUserCard image={cover} name="oioioi" email="oioioi" role="user"/>
        </div>
        </Page>
    </Container>
  )
}
