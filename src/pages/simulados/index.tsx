import Image from 'next/image';
import { useState } from 'react';

import { Container, Content, Search } from '../../components/styles/simulados';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { ExamBar } from '@/components/ExamBar';
import { Modal } from '@/components/Modal';

import simulado from '@/assets/Test.png'

export default function Home() {
  const [array, setArray] = useState<any[]>([
    {title: 'Simulado 1', descripition: "caderno feito agr", questions: ['1', '2', '3', 4, 5]},
    {title: 'Simulado 2', descripition: "caderno feito agr", questions: ['questao1', 'qua', 'qua']},
  ]);

  const [showExamModal, setShowExamModal] = useState(false);
  const [showSimuladoModal, setShowSimuladoModal] = useState(false);
  const [value, setValue] = useState('')

  function handleRemoveExam(deleted: any){
    const confirmDelete = confirm(`deseja excluir o caderno ${deleted.title}`);
    if(!confirmDelete){
      return
    }
    setArray(prevState => prevState.filter(notebook => notebook !== deleted))
}

  function createSimulado(){
    if(!value){
      return alert('Selecione um tipo de simulado.')
    }

    value == 'Personalizado'?
      setShowExamModal(!showExamModal) : {

    }
  }

  return (
    <Container>
     <Header/>
     <Menu page=''/>
     <Content>
      <Modal className={showExamModal ? '' : 'hidden'} onClick={() => setShowExamModal(!showExamModal)} create={true}/>
      
      <Search>
        <SearchInput onChange={() => {}} />
        <Select label='Tipo' options={[{option: 'Aleatorio', value: 'Aleatorio'}, {option: 'Personalizado', value: 'Personalizado'}]}  value={value} onChange={(e: any) => {setValue(e.target.value)}}/>
        <Button onClick={createSimulado}>Criar</Button>
      </Search>
        <DefaultSearchPage text={array.length > 0 ? 'Meus simulados' : 'Você não possui simulados'} picture={simulado} alt='Mulher resolvendo uma prova' content={array.length > 0}>
          {array && array.map((exam, index) => (
            <>
            <ExamBar key={index} title={exam.title} questions={exam.questions} deleteClick={() => handleRemoveExam(exam)} onClick={() => setShowSimuladoModal(!showSimuladoModal)}/>
            <Modal  href={exam.id} className={showSimuladoModal ? '' : 'hidden'} onClick={() => setShowSimuladoModal(!showSimuladoModal)} create={false}/>
            </>
          ))}
        </DefaultSearchPage>
     </Content>
    </Container>
  )
}
