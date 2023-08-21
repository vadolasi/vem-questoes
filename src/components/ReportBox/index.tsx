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
import { toast } from 'react-toastify';

const createReportMutation = graphql(/* GraphQL */ `
  mutation CreateReport2($content: String!, $type: TicketType!) {
    addTicket(
      content: $content
      type: $type
    ) {
      id
    }
  }
`);

export const ReportBox: React.FC<ReportBoxProps> = ({show, question}) => {
    const [selectValue, setSelectValue] = useState('');
    const [motivo, setMotivo] = useState('');
    const [isSending, setIsSending] = useState(false)

    const [, executeCreateReport] = useMutation(createReportMutation);

    const addReport = async () => {
        if(!selectValue){
          return toast.warn('Adicione um tipo de erro!')
        }
        if(!motivo){
          return toast.warn('Adicione o motivo do erro!')
        }
        setIsSending(true)
        await executeCreateReport({ content: motivo, type: "BUG" as TicketType })
        .then(() => {
          setIsSending(false)
          setMotivo('')
          setSelectValue('')
          toast.success('Report recebido com sucesso!')
        })

      }

    return show ? (
        <Container className={show ? 'show' : 'hidden'}>
            <Select label='Tipo do erro' options={[{option: 'Bug do sistema', value: 'BUG'}, {option: 'Sugestão', value: 'FEATURE'}, {option: 'Erro relacionado a questão', value: 'QUESTION'}, {option: 'Outro', value: 'OTHER'}]}  value={selectValue} onChange={(e: any) => {setSelectValue(e.target.value)}}/>
            <div className="input-wrapper">
                <label htmlFor="textarea">Mensagem</label>
                <textarea  id="textarea"
                placeholder="Explique o que aconteceu"
                value={motivo}
                onChange={(e: any) => setMotivo(e.target.value)}
                />
              </div>
              <Button onClick={() => addReport()}>{isSending ? <span className="loading loading-spinner loading-lg"></span> : 'Enviar' }</Button>
        </Container>
    ) : null;
};
