import { useState } from "react"
import { Container, Page } from "../../../components/styles/questao"
import { Button } from "@/components/Button"
import { graphql } from "@/gql";
import { useMutation } from "urql";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const createNotificationMutation = graphql(/* GraphQL */`
  mutation CreateNotification($title: String!, $body: String!) {
    createNotification(
      title: $title
      body: $body
    ) {
      id
    }
  }
`)

export default function Admin() {
  const [notificacao, setNotificacao] = useState('');
  const [, executeMutation] = useMutation(createNotificationMutation)
  const router = useRouter()

  const onSubmit = async () => {
    await executeMutation({ title: "sem título", body: notificacao })
    toast("Notificação criada com sucesso", { type: "success" })
    router.push("/admin")
  }

  return (
    <Container>
        <Page>
         <header>
          <h1>Cadastrar Notificação</h1>
          <p>Dispare suas notificações aqui!</p>
         </header>
         <form id="notificacao">
          <fieldset>
            <div className="fieldset-wrapper">
              <legend>Notificação</legend>

              <div className="input-wrapper">
                <label htmlFor="textarea">Notificação</label>
                <textarea  id="textarea"
                placeholder="Digite aqui a notificacao"
                value={notificacao}
                onChange={(e) => setNotificacao(e.target.value)}
                />
              </div>

                <Button onClick={onSubmit}>Cadastrar</Button>
            </div>
          </fieldset>
         </form>
        </Page>
    </Container>
  )
}
