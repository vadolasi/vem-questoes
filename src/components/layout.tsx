import { ReactNode, useState } from "react";
import { Container, Content } from "./styles/index";
import { ContainerFocus } from "./styles/FocusContainer";
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { FocusButton } from "./FocusButton";

interface Props {
  children: ReactNode;
  page: string;
}

export default function Layout({ children, page }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      {focus ? (
        <ContainerFocus>
          <FocusButton onClick={() => setFocus(!focus)} />
          <Content>{children}</Content>
        </ContainerFocus>
      ) : (
        <Container>
          <FocusButton onClick={() => setFocus(!focus)} />
          <Header />
          <Menu page={page} />
          <Content>{children}</Content>
        </Container>
      )}
    </>
  );
}
