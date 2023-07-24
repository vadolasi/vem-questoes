import React, { useState } from 'react';
import { Container } from './styles';

import { Select } from '../Select';
import { Button } from '../Button';

interface ReportBoxProps {
    show?: boolean
    question?: any
}

import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';
import { TicketType } from '@/gql/graphql';

const createReportMutation = graphql(/* GraphQL */ `
  mutation CreateReport($title: String!, $content: String!, $type: TicketType!) {
    addTicket(
      title: $title
      content: $content
      type: $type
    ) {
      id
    }
  }
`);

export const ReportBox: React.FC<ReportBoxProps> = ({show, question}) => {
    const [selectValue, setSelectValue] = useState('');
    const [title, setTitle] = useState('');
    const [motivo, setMotivo] = useState('');

    const [, executeCreateReport] = useMutation(createReportMutation);

    const addReport = async () => {
        await executeCreateReport({ title: title, content: motivo, type: "BUG" as TicketType })
      }

    return show ? (
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
              <Button onClick={() => addReport()}>Enviar</Button>
        </Container>
    ) : null;
};
