import { useState } from 'react';

import { Search } from '../../components/styles/cadernos';

import { SearchInput } from '@/components/SearchInput';
import { useModal } from '@/components/Modal';

import simulado from '@/assets/Test.png'

import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';
import Layout from '@/components/layout';
import AddSimualdoModal from '@/components/AddSimulado';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import clsx from 'clsx';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { toast } from 'react-toastify';

const simuladosQuery = graphql(/* GraphQL */ `
  query MeusSimulados {
    simulados {
      simulados {
        id
        totalQuestions
        name
      }
    }
  }
`)

const deleteSimuladoMutation = graphql(/* GraphQL */ `
  mutation DeleteSimulado($id: String!) {
    deleteSimulado(id: $id)
  }
`)

export default function Simulados() {
  const [{ data, fetching }, executeQuery] = useQuery({ query: simuladosQuery })
  const [, executeDeleteMutation] = useMutation(deleteSimuladoMutation)

  const [firstLoad, setFirstLoad] = useState(true)

  const [showAddSimulatoModal,, close] = useModal(<AddSimualdoModal onAdd={onAdd} />)

  function onAdd() {
    close()
    executeQuery({ requestPolicy: "network-only" })
  }

  const handleDeleteSimuladoButton = (notebookId: string) => {
    toast.promise(
      (async () => {
        const result = await executeDeleteMutation({ id: notebookId })

        if (result.error) {
          throw new Error(result.error.message)
        }

        executeQuery({ requestPolicy: "network-only" })
      })(),
      {
        error: "Ocorreu um erro ao deleta o simulado",
        pending: "Deletando o caderno",
        success: "Caderno deletado com sucesso"
      }
    )
  }

  const handleUpdateButtonClick = (notebookId: string, name: string) => {

  }

  return (
    <Layout page="mesa-de-estudos">
      <div className="flex flex-col w-full items-center">
        <Search className="w-full flex items-center">
          <SearchInput onChange={() => {}} />
          <button className="btn btn-primary" onClick={showAddSimulatoModal}>Criar</button>
        </Search>
        <DefaultSearchPage
          text={(data?.simulados.simulados.length || 0) > 0 ? 'Meus simulados' : 'Crie um simulado para você!'}
          picture={simulado}
          alt='Mulher escrevendo informações em um carderno'
          content={(data?.simulados.simulados!.length || 0) > 0}
          loading={fetching}
        >
          <div className={clsx("flex flex-col divide-y")}>
            {firstLoad && fetching ? (
              <span className="loading loading-spinner" />
            ) : data?.simulados.simulados.length! < 1 ? (
              <h1>Nenhum simulado!</h1>
            ) : data?.simulados.simulados.map(simulado => (
              <div className="p-5 flex justify-between items-center" key={simulado.id}>
                <div className="tooltip" data-tip={simulado.name}>
                  <p className="font-bold truncate text-left">{simulado.name}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col text-center font-bold px-5">
                    <span>Questões</span>
                    <span>{simulado.totalQuestions}</span>
                  </div>
                  <button className="btn btn-circle btn-sm btn-outline btn-error" onClick={() => handleDeleteSimuladoButton(simulado.id)}>
                    <AiOutlineDelete />
                  </button>
                  <button className="btn btn-circle btn-sm btn-outline" onClick={() => handleUpdateButtonClick(simulado.id, simulado.name)}>
                    <AiOutlineEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DefaultSearchPage>
      </div>
    </Layout>
  )
}
