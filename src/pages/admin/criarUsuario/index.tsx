import { useState } from "react"
import { Container, Page } from "../../../components/styles/questao"
import { Button } from "@/components/Button"

export default function Admin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');


  return (
    <Container>
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
                  <label htmlFor="name">nome</label>
                  <input type="text" id="name" 
                  placeholder="coloque o nome do usuário"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                  </div>
              <div className="input-wrapper">
                  <label htmlFor="email">email</label>
                  <input type="email" id="email" 
                  placeholder="coloque o nome do usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
              <div className="input-wrapper">
                  <label htmlFor="password">senha</label>
                  <input type="text" id="password" 
                  placeholder="coloque o nome do usuário"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  </div>
              <div className="input-wrapper">
                  <label htmlFor="role">senha</label>
                  <select 
                  id="role" 
                  placeholder="coloque o nome do usuário"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="USER">usuário</option>
                    <option value="ADM">Administrador</option>
                  </select>
                  </div>



                <Button>Cadastrar</Button>
            </div>
          </fieldset>
         </form>
        </Page>
    </Container>
  )
}
