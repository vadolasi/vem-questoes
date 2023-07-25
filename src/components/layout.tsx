import { ReactNode } from "react"
import { Container, Content } from './styles/index';
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";

interface Props {
  children: ReactNode
  page: string
}

export default function Layout({ children, page }: Props) {
  return (
    <Container>
      <Header/>
      <Menu page={page} />
      <Content>
        {children}
      </Content>
    </Container>
  )
}
