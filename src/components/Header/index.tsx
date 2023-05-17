import { useState } from 'react'
import Image from "next/image";
import {AiOutlineDownCircle, AiOutlineUpCircle, AiOutlineLineChart, AiOutlineUser, AiOutlinePoweroff, AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart} from 'react-icons/ai'

import { Container, Profile, DropMenu, ProfileInfo } from "./styles";

import Logo from '../../assets/logo.png';
import profilePicture from '../../assets/profile/Picture.png'
import Link from 'next/link';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    function handleChangeMenuState(){
        setShowMenu(!showMenu);
    }

    return(
            <Container>
                <Image src={Logo} alt="Logo escrito 'Vem questões'" className='Logo'/>
                <Profile>
                    <ProfileInfo>
                        <Image src={profilePicture} alt="Foto de perfil do usuário"/>
                        <span>Iago Nobre da Silva</span>
                        <button onClick={handleChangeMenuState}>
                            {showMenu ? <AiOutlineUpCircle/> : <AiOutlineDownCircle/>}
                        </button>
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

                        <li className='Mobile'>
                            <Link href="#">
                                <AiOutlinePoweroff/>
                                Sair
                            </Link>
                        </li>
                    </DropMenu>
                </Profile>
            </Container>
    );
} 