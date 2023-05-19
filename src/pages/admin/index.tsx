import { Container } from "../../components/styles/admin"
import { Button } from '@/components/Button'


export default function Admin() {
  return (
    <Container>
         <Button link="/admin/questao">Add questão</Button>
    </Container>
  )
}
