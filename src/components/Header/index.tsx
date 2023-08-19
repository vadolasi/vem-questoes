import { useState } from "react";
import Image from "next/image";
import {
  AiOutlineDownCircle,
  AiOutlineUpCircle,
  AiOutlineLineChart,
  AiOutlineUser,
  AiOutlinePoweroff,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineForm,
  AiOutlineKey,
  AiOutlineBarChart,
  AiOutlineBell,
} from "react-icons/ai";

import { Container, Profile, DropMenu, ProfileInfo } from "./styles";

import Logo from "../../assets/logo.png";
import Link from "next/link";
import { graphql } from "@/gql";
import { useMutation, useQuery } from "urql";

import NotificacoesCard from "../NotificacoesCard";

const meQuery = graphql(/* GraphQL */ `
  query Me {
    me {
      name
      photoUrl
    }
    notifications {
      id
      title
      body
    }
  }
`);

const logoutMutation = graphql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

type HeaderProps = {
  invisible?: boolean;
};

export const Header = ({ invisible = false }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [result] = useQuery({ query: meQuery });
  const [, execute] = useMutation(logoutMutation);

  const { data, fetching } = result;

  function handleChangeMenuState() {
    setShowMenu(!showMenu);
  }

  return (
    <div
      className="navbar w-full sticky top-0 z-40 bg-white border-b h-20 pr-10"
    >
      <div className="navbar-start">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2 hidden md:block"><Image src={Logo} alt="Logo escrito 'Vem questões'" height={50} className="Logo" /></div>
      </div>
      <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="rounded-full border h-14 flex items-center justify-between p-1 bg-gray-100">
          <div className="avatar h-full">
            <div className="h-full rounded-full flex items-center justify-center w-full">
              {fetching ? <span className="loading loading-spinner h-full text-center"></span> :
              <Image
                src={data?.me?.photoUrl!}
                width={20}
                height={20}
                alt="Foto de perfil do usuário"
              />}
            </div>
          </div>
          <span className="text-center w-full m-2">{data?.me?.name}</span>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link href="/perfil">
              <AiOutlineUser />
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/ofertas">
              <AiOutlineUser />
              Planos
            </Link>
          </li>
          <li>
            <Link href="/login" onClick={() => execute({})}>
              <AiOutlinePoweroff />
              Sair
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};
