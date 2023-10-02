import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

import { Container } from "./styles";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineForm,
  AiOutlineKey,
  AiOutlineBarChart,
} from "react-icons/ai";
import { FC } from "react";

import Button from "../../assets/button.png";

interface menuProps {
  page: string;
  invisible?: boolean;
}

export const Menu: FC<menuProps> = ({ page, invisible }) => {
  return (
    <div className="flex flex-col h-full bg-base-100">
      <div className="flex-1 hidden border-b md:flex">
        <div className="flex items-center h-20 pl-10">
          <div className="flex-1 hidden px-2 mx-2 md:block">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo escrito 'Vem questões'"
                height={50}
                className="Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <Container className={`${invisible ? "hidden" : ""} border-r h-full`}>
        <li>
          <Link href="/" className={page == "home" ? "page" : ""}>
            <AiOutlineHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/mesa-de-estudos"
            className={page == "mesa-de-estudos" ? "page" : ""}
          >
            <AiOutlineRead />
            Mesa de estudos
          </Link>
        </li>
        <li>
          <Link
            href="/banco-de-questoes"
            className={page == "banco-de-questoes" ? "page" : ""}
          >
            <AiOutlineForm />
            Banco de questões
          </Link>
        </li>
        <li>
          <Link href="/raio-x" className={page == "raiox" ? "page" : ""}>
            <AiOutlineKey />
            Raio-X
          </Link>
        </li>
        <li>
          <Link
            href="/estatisticas"
            className={page == "estatisticas" ? "page" : ""}
          >
            <AiOutlineBarChart />
            Estatísticas
          </Link>
        </li>
        <li>
          <Link href="/ofertas" className={page == "" ? "page" : ""}>
            <Image src={Button} alt="botão para acessar página de promoções" />
          </Link>
        </li>
      </Container>
    </div>
  );
};
