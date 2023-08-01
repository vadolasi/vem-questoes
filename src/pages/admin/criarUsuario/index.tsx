import { useState } from "react"
import { Container } from "../../../components/styles/adminContainer"
import { Page } from "@/components/styles/questao";
import { Header } from "@/components/Header";
import { AdminMenu } from "@/components/AdminMenu";
import { Button } from "@/components/Button"
import { graphql } from "@/gql";
import { useMutation } from "urql";
import { Role } from "@/gql/graphql";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const createUserMutation = graphql(/* GraphQL */`
  mutation InviteUser(
    $name: String!
    $email: String!
    $role: Role!
  ) {
    inviteUser(
      name: $name
      email: $email
      role: $role
    ) {
      id
    }
  }
`)

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('USER');

  const [, execute] = useMutation(createUserMutation)

  const router = useRouter()

  const onSubmit = async () => {
    const result = await execute({
      name,
      email,
      role: role as Role
    })

    if (result.data?.inviteUser.id) {
      toast("Usuário criado com sucesso!", { type: "success" })
      router.push("/admin")
    }
  }

  return (
    <Container>
        <Header />
        <AdminMenu page="userAdd"/>
        <Page>
        <header>
        <h1>Cadastrar Usuário</h1>
        <p>Preencha o formulário para cadastrar um usuário</p>
        </header>
        <form id="usuario">
          <fieldset>
            <div className="fieldset-wrapper">
              <legend>Informações do usuário</legend>

              <div className="input-wrapper">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name"
                  placeholder="Coloque o nome do usuário"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                  </div>
              <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email"
                  placeholder="Coloque o email do usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
              <div className="input-wrapper">
                  <label htmlFor="role">Cargo</label>
                  <select
                  id="role"
                  placeholder="Defina um cargo para o usuário"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="USER">Usuário</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
                  </div>
                <Button onClick={onSubmit}>Cadastrar</Button>
            </div>
          </fieldset>
        </form>
        </Page>
        
    </Container>
  )
}
