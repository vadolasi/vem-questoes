import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface MatterCardProps {
    title: string,
    color: string,
    number: number,
}

export const MatterCard: React.FC<MatterCardProps> = ({title, number,color}) => {
    return (
        <Container>
            <Link href="banco-de-questoes/questao">
            <div className='ColorBar' style={{background: `${color}`}}></div>

            <h1>{title}</h1>
            <span>{number} Exercícios encontrados</span>
            </Link>
        </Container>
    );
};
