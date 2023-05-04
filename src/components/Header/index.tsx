import { useState } from 'react'
import Image from "next/image";
import {AiOutlineDownCircle, AiOutlineUpCircle, AiOutlineLineChart, AiOutlineUser, AiOutlinePoweroff, AiOutlineBell} from 'react-icons/ai'

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
                            <Link href='#'>
                                <AiOutlineUser/>
                                Planos
                            </Link>
                        </li>
                        <li>
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