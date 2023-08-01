import Link from 'next/link';
import Image from 'next/image';

import { MenuContainer } from "./styles";
import {AiOutlineHome, AiOutlineRead, AiOutlineExclamation, AiOutlineUserAdd, AiOutlineUser} from 'react-icons/ai'
import { FC } from 'react';

interface adminMenuProps {
    page: string,
}

export const AdminMenu: FC<adminMenuProps> = ({page}) => {
    return(
        <div style={{ position: "fixed", height: "100%" }}>
        <MenuContainer style={{ marginTop: "100px" }}>
            <li>
                <Link href="/admin" className={page == 'home' ? 'page' : ''}>
                        <AiOutlineHome/>
                        Home
                </Link>
            </li>
            <li>
                <Link href="/admin/questao" className={page == 'criarQuestao' ? 'page' : ''}>
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
        </MenuContainer>
      </div>
    );
}
