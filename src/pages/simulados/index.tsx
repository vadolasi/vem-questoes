import { useState } from 'react';

import { Search } from '../../components/styles/cadernos';

import { SearchInput } from '@/components/SearchInput';
import { useModal } from '@/components/Modal';

import simulado from '@/assets/Test.png'

import { graphql } from '@/gql';
import { useQuery } from 'urql';
import Layout from '@/components/layout';
import AddSimualdoModal from '@/components/AddSimulado';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import clsx from 'clsx';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';

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

export default function Simulados() {
  const [result, executeQuery] = useQuery({ query: simuladosQuery })

  const { data, fetching } = result
  const [firstLoad, setFirstLoad] = useState(true)

  const [showAddSimulatoModal,, close] = useModal(<AddSimualdoModal onAdd={onAdd} />)

  function onAdd() {
    close()
    executeQuery({ requestPolicy: "network-only" })
  }

  const handleDeleteSimuladoButton = (notebookId: string) => {

  }

  const handleUpdateButtonClick = (notebookId: string, name: string, description: string) => {

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
                  <button className="btn btn-circle btn-sm btn-outline btn-error" onClick={() => handleDeleteNotebookButton(notebook.id)}>
                    <AiOutlineDelete />
                  </button>
                  <button className="btn btn-circle btn-sm btn-outline" onClick={() => handleUpdateButtonClick(notebook.id, notebook.name, notebook.description!)}>
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
