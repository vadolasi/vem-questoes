import Link from 'next/link';
import Image from 'next/image';

import { Container } from "./styles";
import {AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart} from 'react-icons/ai'
import { FC } from 'react';

import Button from '../../assets/button.png'

interface menuProps {
    page: string,
}

export const Menu: FC<menuProps> = ({page}) => {
    return(
      <div style={{ position: "fixed", height: "100%" }}>
        <Container style={{ marginTop: "100px" }}>
            <li>
                <Link href="/" className={page == 'home' ? 'page' : ''}>
                        <AiOutlineHome/>
                        Home
                </Link>
            </li>
            <li>
                <Link href="/mesa-de-estudos" className={page == 'mesa-de-estudos' ? 'page' : ''}>
                        <AiOutlineRead/>
                        Mesa de estudos
                </Link>
            </li>
            <li>
                <Link href="/banco-de-questoes" className={page == 'banco-de-questoes' ? 'page' : ''}>
                    <AiOutlineForm/>
                    Banco de questões
                </Link>
            </li>
            <li>
                <Link href="/raio-x" className={page == 'raio-x' ? 'page' : ''}>
                    <AiOutlineKey/>
                    Raio-X
                </Link>
            </li>
            <li>
                <Link href="/estatisticas" className={page == 'estatisticas' ? 'page' : ''}>
                    <AiOutlineBarChart/>
                    Estatísticas
                </Link>
            </li>
            <li>
                <Link href="/ofertas" className={page == '' ? 'page' : ''}>
                    <Image src={Button} alt='botão para acessar página de promoções'/>
                </Link>
            </li>
        </Container>
      </div>
    );
}
