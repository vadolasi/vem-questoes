import { useState } from "react"
import { Container, Page } from "../../../components/styles/questao"
import { Button } from "@/components/Button"

export default function Admin() {
  const [notificacao, setNotificacao] = useState('');

  return (
    <Container>
        <Page>
         <header>
          <h1>Cadastrar Notificação</h1>
          <p>Dispare suas notificações aqui!</p>
         </header>
         <form id="questao">
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

                <Button>Cadastrar</Button>
            </div>
          </fieldset>
         </form>
        </Page>
    </Container>
  )
}
