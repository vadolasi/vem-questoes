import { useState } from 'react'
import Image from "next/image";
import {AiOutlineDownCircle, AiOutlineUpCircle, AiOutlineLineChart, AiOutlineUser, AiOutlinePoweroff, AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart, AiOutlineBell} from 'react-icons/ai'

import { Container, Profile, DropMenu, ProfileInfo, Line } from "./styles";

import Logo from '../../assets/logo.png';
import Link from 'next/link';
import { graphql } from '@/gql';
import { useQuery } from 'urql';

import { SpinnerCircular } from 'spinners-react';

const meQuery = graphql(/* GraphQL */ `
  query Me {
    me {
      name
      photoUrl
    }
  }
`);

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [result] = useQuery({ query: meQuery })

  const { data, fetching } = result

  function handleChangeMenuState() {
    setShowMenu(!showMenu);
  }

    return(
      <>
            <Container>
                <Image src={Logo} alt="Logo escrito 'Vem questões'" className='Logo'/>
                <Profile>
                    <AiOutlineBell className='notificacoes'/>
                    <ProfileInfo>
                      {fetching ? <SpinnerCircular size={40} color="#f0f0fc"/> : 
                      <>
                        <Image src={data?.me?.photoUrl!} width={20} height={20} alt="Foto de perfil do usuário"/>
                        <span>{data?.me?.name!}</span>
                        <button onClick={handleChangeMenuState}>
                            {showMenu ? <AiOutlineUpCircle/> : <AiOutlineDownCircle/>}
                        </button>
                      </>
                      }
                        
                    </ProfileInfo>
                    <DropMenu className={showMenu ? "show" : "hidden"}>
                        <li>
                            <Link href='/perfil'>
                                <AiOutlineLineChart/>
                                Perfil
                            </Link>
                        </li>
                        <li>
                            <Link href='/ofertas'>
                                <AiOutlineUser/>
                                Planos
                            </Link>
                        </li>
                        <li className='Mobile'>
                            <Link href='/'>
                             <AiOutlineHome/>
                             Home
                            </Link>
                        </li>
                        <li className='Mobile'>
                            <Link href='/mesa-de-estudos'>
                                <AiOutlineRead/>
                                Mesa de estudos
                            </Link>
                        </li>
                        <li className='Mobile'>
                            <Link href='/banco-de-questoes'>
                                <AiOutlineForm/>
                                Banco de questões
                            </Link>
                        </li>
                        <li className='Mobile'>
                            <Link href='/raio-x'>
                                <AiOutlineKey/>
                                Raio-X
                            </Link>
                        </li>
                        <li className='Mobile'>
                            <Link href='/estatisticas'>
                                <AiOutlineBarChart/>
                                Estatísticas
                            </Link>
                        </li>

            <li>
              <Link href="#">
                <AiOutlinePoweroff />
                Sair
              </Link>
            </li>
          </DropMenu>
        </Profile>

      </Container>
      <Line />
    </>
  );
}
