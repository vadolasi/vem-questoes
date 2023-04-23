import React from 'react';

import { Container } from './styles';

interface MatterCardProps {
    title: string,
    color: string,
    number: number,
}

export const MatterCard: React.FC<MatterCardProps> = ({title, number,color}) => {
    return (
        <Container>
            <div className='ColorBar' style={{background: `${color}`}}></div>

            <h1>{title}</h1>
            <span>{number} Exercícios encontrados</span>
        </Container>
    );
};
