import React, { useState } from 'react';
import {AiOutlineBarChart, AiOutlineBulb} from 'react-icons/ai'

import { Container, MatterInfo, SpecificInfos } from './styles'

interface XrayButtonProps {
    disciplina: string,
    relevancia: number,
    desempenho: number,
    assuntos: any,
}

export const XrayButton: React.FC<XrayButtonProps> = ({disciplina, relevancia, desempenho, assuntos}) => {
    const [show, setShow] = useState(false)
    return (
        <Container>
            <MatterInfo onClick={() => setShow(!show)} className={show ? 'active' : ''}>
                <h1>{disciplina}</h1>
                <span><AiOutlineBarChart/>Relevância: <strong>{relevancia}%</strong></span>
                <span><AiOutlineBulb/>Meu desempenho: <strong>{desempenho}%</strong></span>
            </MatterInfo>
            <SpecificInfos className={show ? '' : 'hidden'}>
                {assuntos && assuntos.map((assunto: any, index: any) => (
                 <div key={index}>
                    <span>{assunto.assunto}</span>
                    <span>Relevância na disciplina: <strong>{assunto.relevancia}%</strong></span>
                 </div>
                ))}

            </SpecificInfos>
        </Container>
    );
};
