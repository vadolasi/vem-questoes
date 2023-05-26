import { Container } from "../../components/styles/admin"
import { Button } from '@/components/Button'


export default function Admin() {
  return (
    <Container>
         <Button link="/admin/questao">Criar questão</Button>
         <Button link="/admin/notificacao">Criar notificação</Button>
         <Button link="/admin/criarUsuario">Criar Usuário</Button>
         <Button link="/admin/listarUsuarios">Listar Usuários</Button>
    </Container>
  )
}
