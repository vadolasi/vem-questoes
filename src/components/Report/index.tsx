import { ButtonReport } from "../styles/banco-de-questoes"

import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';
import { TicketType } from '@/gql/graphql';
import { toast } from 'react-toastify';
import { Select } from "../Select";
import { useState } from "react";
import { Button } from "../Button";

const createReportMutation = graphql(/* GraphQL */ `
  mutation CreateReport($content: String!, $type: TicketType!, $questionId: String) {
    addTicket(
      content: $content
      type: $type
      questionId: $questionId
    ) {
      id
    }
  }
`)

interface Props {
  questionId?: string
}

export default function Report({ questionId }: Props) {
  const [selectValue, setSelectValue] = useState('');
  const [motivo, setMotivo] = useState('');

  const [{ fetching }, executeCreateReport] = useMutation(createReportMutation);

  const addReport = async () => {
    if(!selectValue){
      return toast.warn('Adicione um tipo de erro!')
    }
    if(!motivo){
      return toast.warn('Adicione o motivo do erro!')
    }
    await executeCreateReport({ content: motivo, type: motivo as TicketType, questionId })
    setMotivo('')
    setSelectValue('')
    toast.success('Report recebido com sucesso!')
    ;(window as any).report_modal.close()
  }

  return (
    <>
      <button className="btn btn-error btn-outline btn-sm rounded-full" onClick={() => (window as any).report_modal.showModal()}>Reportar</button>
      <dialog id="report_modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <Select label='Tipo do erro' options={[{option: 'Bug do sistema', value: 'BUG'}, {option: 'Sugestão', value: 'FEATURE'}, {option: 'Erro relacionado a questão', value: 'QUESTION'}, {option: 'Outro', value: 'OTHER'}]}  value={selectValue} onChange={(e: any) => {setSelectValue(e.target.value)}}/>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mensagem</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Explique o que aconteceu"
              value={motivo}
              onChange={(e: any) => setMotivo(e.target.value)}
            ></textarea>
          </div>
          <button disabled={fetching} className="btn btn-primary w-full mt-5" onClick={() => addReport()}>{fetching ? <span className="loading loading-spinner loading-lg"></span> : 'Enviar' }</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
