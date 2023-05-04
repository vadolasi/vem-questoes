import Image from 'next/image';
import {useState} from 'react'

import { Container, Content, Search } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';


import notebook from '@/assets/Notebook.png'
import { NotebookCard } from '@/components/NotebookCard';

export default function Home() {
  const [array, setArray] = useState<any[]>([
    {title: 'caderno 1', descripition: "caderno feito agr", questions: ['1', '2', '3', 4, 5]}, 
    {title: 'caderno 2', descripition: "caderno feito agr", questions: ['questao1', 'qua', 'qua']},]);

    function handleRemoveNotebook(deleted: any){
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
        <Button text='+ Criar Caderno' onClick={() => setArray(prev => [...prev, {title: 'titulo', descripition: "mude titulo e descrição no botao", questions: []}])}/>
      </Search>
        <DefaultSearchPage text={array.length > 0 ? 'Meus cadernos' : 'Crie um caderno para você!'} picture={notebook} alt='Mulher escrevendo informações em um carderno' content={array.length > 0}>
            {array && array.map((notebook, index) => (
            <NotebookCard key={index} title={notebook.title} description={notebook.descripition} questions={notebook.questions} deleteClick={() => handleRemoveNotebook(notebook)}/>
            ))}

        </DefaultSearchPage>
     </Content> 
    </Container>
  )
}
