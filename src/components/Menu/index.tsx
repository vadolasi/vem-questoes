import Link from 'next/link';

import { Container } from "./styles";
import {AiOutlineHome, AiOutlineRead, AiOutlineForm, AiOutlineKey, AiOutlineBarChart} from 'react-icons/ai'
import { FC } from 'react';

interface menuProps {
    page: string,
}

export const Menu: FC<menuProps> = ({page}) => {
    console.log(page)
    return(
        <Container>
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
        </Container>
    );
}
