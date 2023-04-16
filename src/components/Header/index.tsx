import Image from "next/image";
import {AiOutlineDownCircle} from 'react-icons/ai'

import { Container } from "./styles";

import Logo from '../../assets/Logo2.png';
import profilePicture from '../../assets/profile/Picture.png'

export const Header = () => {
    return(
            <Container>
                <Image src={Logo} alt="Logo escrito 'Vem questões'"/>
                <div className="Profile">
                    <Image src={profilePicture} alt="Foto de perfil do usuário"/>
                    <span>Iago Nobre da Silva</span>
                    <button><AiOutlineDownCircle/></button>
                </div>
            </Container>
    );
} 