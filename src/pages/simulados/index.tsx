import Image from 'next/image';
import { useState } from 'react';

import { Container, Content, Search } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';


import simulado from '@/assets/Test.png'
import { ExamBar } from '@/components/ExamBar';

export default function Home() {
  const [array, setArray] = useState<any[]>([
    {title: 'caderno 1', descripition: "caderno feito agr", questions: ['1', '2', '3', 4, 5]}, 
    {title: 'caderno 2', descripition: "caderno feito agr", questions: ['questao1', 'qua', 'qua']},
  ]);

  function handleRemoveExam(deleted: any){
    const confirmDelete = confirm(`deseja excluir o caderno ${deleted.title}`);

    if(!confirmDelete){
      return
    }

    setArray(prevState => prevState.filter(notebook => notebook !== deleted))
}

  return (
    <Container>
     <Header/>
     <Menu page=''/>
     <Content>
      <Search>
        <SearchInput/>
        <Select label='Tipo' options={['Aleatório', 'Personalizado']}/>
        <Button text='Criar'/>
      </Search>
        <DefaultSearchPage text={array.length > 0 ? 'Meus simulados' : 'Você não possui simulados'} picture={simulado} alt='Mulher resolvendo uma prova' content={array.length > 0}>
        {array && array.map((exam, index) => (
            <ExamBar key={index} title={exam.title} description={exam.descripition} questions={exam.questions} deleteClick={() => handleRemoveExam(exam)}/>
            ))}
        </DefaultSearchPage>
     </Content> 
    </Container>
  )
}
