import Link from 'next/link';

import { Container } from "./styles";
import {AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart} from 'react-icons/ai'

export const Menu = () => {
    return(
        <Container>
            <li>
                <Link href="/home">
                        <AiOutlineHome/>
                        Home
                </Link>
            </li>
            <li>
                <Link href="/mesa-de-estudos">   
                        <AiOutlineRead/>
                        Mesa de estudos
                </Link>
            </li>
            <li>
                <Link href="/banco-de-questoes">
                    <AiOutlineForm/>
                    Banco de questões
                </Link>
            </li>
            <li>
                <Link href="/raio-x"> 
                    <AiOutlineKey/>
                    Raio-X
                </Link>
            </li>
            <li>
                <Link href="/estatisticas">
                    <AiOutlineBarChart/>
                    Estatísticas
                </Link>
            </li>
        </Container>
    );
}