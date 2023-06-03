import React, { useState } from 'react';
import { Container } from './styles';

import { Select } from '../Select';
import { Button } from '../Button';

interface ReportBoxProps {
    show?: boolean
    question?: any
}

export const ReportBox: React.FC<ReportBoxProps> = ({show, question}) => {
    const [selectValue, setSelectValue] = useState('');
    const [title, setTitle] = useState('');
    const [motivo, setMotivo] = useState('');

    return (
        <Container className={show ? 'show' : 'hidden'}>
            <Select label='Tipo do erro' options={[{option: 'bug', value: 'BUG'}, {option: 'Feature', value: 'FEATURE'}, {option: 'Questão', value: 'QUESTION'}, {option: 'Outro', value: 'OTHER'}]}  value={selectValue} onChange={(e: any) => {setSelectValue(e.target.value)}}/>
            <div className="input-wrapper">
                <label htmlFor="input">Titulo</label>
                <input  id="input"
                placeholder="Título"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                />
              </div>
            <div className="input-wrapper">
                <label htmlFor="textarea">Motivo</label>
                <textarea  id="textarea"
                placeholder="Explique o que aconteceu"
                value={motivo}
                onChange={(e: any) => setMotivo(e.target.value)}
                />
              </div>
              <Button>Enviar</Button>
        </Container>
    );
};
