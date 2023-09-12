import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineHome, AiOutlineRead, AiOutlineExclamation, AiOutlineUserAdd, AiOutlineUser} from 'react-icons/ai'
import { VscGraph } from 'react-icons/vsc'
import { FC } from 'react';
import Logo from "../../assets/logo.png";
import { Container } from "./styles";

interface menuProps {
  page: string;
  invisible?: boolean;
}

export const AdminMenu: FC<menuProps> = ({ page, invisible }) => {
  return (
    <div className="flex flex-col h-full bg-base-100">
      <div className="flex-1 hidden border-b md:flex">
        <div className="flex items-center h-20 pl-10">
          <div className="flex-1 hidden px-2 mx-2 md:block">
            <Link href="/">
              <Image src={Logo} alt="Logo escrito 'Vem questões'" height={50} className="Logo" />
            </Link>
          </div>
        </div>
      </div>
      <Container
        className={`${invisible ? "hidden" : ""} border-r h-full`}
      >
            <li>
                <Link href="/admin/questao" className={page == 'AddQuestao' ? 'page' : ''}>
                        <AiOutlineRead/>
                        Criar questão
                </Link>
            </li>
            <li>
                <Link href="/admin/notificacao" className={page == 'notificacao' ? 'page' : ''}>
                    <AiOutlineExclamation/>
                    Criar notificação
                </Link>
            </li>
            <li>
                <Link href="/admin/criarUsuario" className={page == 'userAdd' ? 'page' : ''}>
                    <AiOutlineUserAdd/>
                    Criar Usuários
                </Link>
            </li>
            <li>
                <Link href="/admin/listarUsuarios" className={page == 'userList' ? 'page' : ''}>
                    <AiOutlineUser/>
                    Listar Usuários
                </Link>
            </li>
            <li>
                <Link href="/admin/estatisticas" className={page == 'estatisticas' ? 'page' : ''}>
                    <VscGraph/>
                    Estatísticas
                </Link>
            </li>
      </Container>
    </div>
  );
};

