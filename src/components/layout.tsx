import { ReactNode, useState } from "react";
import { Container, Content } from "./styles/index";
import { ContainerFocus } from "./styles/FocusContainer";
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { FocusButton } from "./FocusButton";

interface Props {
  children: ReactNode;
  page: string;
  visible?: boolean;
}

export default function Layout({ children, page, visible = false }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      {focus ? (
        <ContainerFocus>
          <FocusButton
            onClick={() => setFocus(!focus)}
            className={visible ? "" : "hidden"}
          />
          <Content>{children}</Content>
        </ContainerFocus>
      ) : (
        <Container>
          <FocusButton
            onClick={() => setFocus(!focus)}
            className={visible ? "" : "hidden"}
          />
          <Header />
          <Menu page={page} />
          <Content>{children}</Content>
        </Container>
      )}
    </>
  );
}
