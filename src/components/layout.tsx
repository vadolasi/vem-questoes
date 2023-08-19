import { ReactNode, useEffect, useState } from "react";
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F11") {
        setFocus(!focus)
      }
    }

    if (visible) {
      window.addEventListener("keydown", handleKeyDown)
    }

    const handleFullScreen = () => {
      if (document.fullscreenElement) {
        setFocus(true)
      } else {
        setFocus(false)
      }
    }

    document.addEventListener("fullscreenchange", handleFullScreen)

    const handleSize = () => {
      if (window.innerWidth === screen.width && window.innerHeight === screen.height) {
        setFocus(true)
      } else {
        setFocus(false)
      }
    }

    window.addEventListener("resize", handleSize)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("fullscreenchange", handleFullScreen)
      window.removeEventListener("resize", handleSize)
    }
  }, [focus])

  return (
    <>
      {focus ? (
        <ContainerFocus>
          <Content>{children}</Content>
        </ContainerFocus>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Container>
              <Header />
              <Content>{children}</Content>
            </Container>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <Menu page={page} />
          </div>
        </div>
      )}
    </>
  );
}
