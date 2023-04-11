import Image from "next/image";

import { Container } from "./styles";

import Logo from '../../assets/Logo2.png'

export const Header = () => {
    return(
            <Container>
                <Image src={Logo} alt="Logo escrito 'Vem questões'"/>
                <div>
                    Perfil
                </div>
            </Container>
    );
} 