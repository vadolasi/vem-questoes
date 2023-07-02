import { Container, Content } from "../../components/styles/ofertas"
import { Menu } from "@/components/Menu"
import { Header } from "@/components/Header"

export default function Table() {
  return (
    <Container>
      <Header/>
      <Menu page="" />
      <Content>
        <h1>Em breve ótimas ofertas!</h1>
      </Content>
    </Container>
  )
}
