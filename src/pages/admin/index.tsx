import { Container } from "../../components/styles/admin"
import { Button } from '@/components/Button'


export default function Admin() {
  return (
    <Container>
         <Button text="Add Questão" link="/admin/questao"/>
    </Container>
  )
}
