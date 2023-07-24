import Image from 'next/image';
import { useState } from 'react';

import { Search } from '../../components/styles/simulados';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { ExamBar } from '@/components/ExamBar';
import { Modal } from '@/components/Modal';

import simulado from '@/assets/Test.png'

import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';
import { toast } from 'react-toastify';
import Layout from '@/components/layout';

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

const createSimuladoMutation = graphql(/* GraphQL */`
  mutation CreateRandomSimualdo($name: String!) {
    createSimulado(
      type: Random
      name: $name
      areas: []
    ) {
      id
    }
  }
`)

export default function Home() {
  const [result, executeQuery] = useQuery({ query: simuladosQuery })

  const { data, fetching } = result

  const [showExamModal, setShowExamModal] = useState(false);
  const [showSimuladoModal, setShowSimuladoModal] = useState(false);
  const [value, setValue] = useState('')
  const [, execute] = useMutation(createSimuladoMutation)

  function handleRemoveExam(deleted: any){
    const confirmDelete = confirm(`deseja excluir o caderno ${deleted.title}`);
    if(!confirmDelete){
      return
    }
  }

  async function createSimulado(){
    if(!value){
      return alert('Selecione um tipo de simulado.')
    }

    if (value == 'Personalizado') {
      setShowExamModal(!showExamModal)
    } else {
      toast.promise(
        async () => {
          await execute({ name: "Simulado aleatório" })
          executeQuery()
        },
        {
          error: "Erro ao criar simulado",
          pending: "Criando simulado",
          success: "Simulado criado com sucesso"
        }
      )
    }
  }

  return (
    <Layout page="mesa-de-estudos">
      {showExamModal && <Modal onClick={() => setShowExamModal(!showExamModal)} create={true}/>}

      <Search>
        <SearchInput onChange={() => {}} />
        <Select label='Tipo' options={[{option: 'Aleatorio', value: 'Aleatorio'}, {option: 'Personalizado', value: 'Personalizado'}]}  value={value} onChange={(e: any) => {setValue(e.target.value)}}/>
        <Button onClick={createSimulado}>Criar</Button>
      </Search>
      <DefaultSearchPage loading={fetching} text={(data?.simulados.simulados.length || 0) > 0 ? 'Meus simulados' : 'Você não possui simulados'} picture={simulado} alt='Mulher resolvendo uma prova' content={(data?.simulados.simulados.length || 0) > 0}>
        {data?.simulados && data.simulados.simulados.map((exam) => (
          <>
            <ExamBar key={exam.id} title={exam.name} questions={exam.totalQuestions} deleteClick={() => handleRemoveExam(exam)} onClick={() => setShowSimuladoModal(!showSimuladoModal)}/>
            <Modal  href={exam.id} key={exam.id} className={showSimuladoModal ? '' : 'hidden'} onClick={() => setShowSimuladoModal(!showSimuladoModal)} create={false}/>
          </>
        ))}
      </DefaultSearchPage>
    </Layout>
  )
}
