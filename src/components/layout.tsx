import { ReactNode, useEffect, useState } from "react";
import { Container, Content } from "./styles/index";
import { ContainerFocus } from "./styles/FocusContainer";
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  children: ReactNode;
  page: string;
  visible?: boolean;
}

export default function Layout({ children, page, visible = false }: Props) {
  const [focus, setFocus] = useState(false);
  const focusPages = ["banco-de-questoes", "cadernos", "simulados"];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F11") {
        setFocus(!focus);
      }
    };

    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    const handleFullScreen = () => {
      if (document.fullscreenElement) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreen);

    const handleSize = () => {
      if (
        window.innerWidth === screen.width &&
        window.innerHeight === screen.height
      ) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullScreen);
      window.removeEventListener("resize", handleSize);
    };
  }, [focus]);

  return (
    <>
      {focusPages.includes(page) && (
        <button
          className="fixed z-50 text-3xl rounded-full shadow-md text-accent bg-base-200 bottom-4 right-4"
          onClick={() => setFocus(!focus)}
        >
          {focus ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      )}
      {focus ? (
        <ContainerFocus>
          <Tooltip id="tooltip" />
          <Content>{children}</Content>
        </ContainerFocus>
      ) : (
        <div className="drawer lg:drawer-open">
          <Tooltip id="tooltip" />
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content">
            <Container>
              <Header />
              <Content>{children}</Content>
            </Container>
          </div>
          <div className="z-50 drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <Menu page={page} />
          </div>
        </div>
      )}
    </>
  );
}
