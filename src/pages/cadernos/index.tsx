import Image from 'next/image';

import { Container, Content, Search } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';


import notebook from '@/assets/Notebook.png'

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu page=''/>
     <Content>
      <Search>
        <SearchInput/>
        <Button text='+ Criar Caderno'/>
      </Search>
        <DefaultSearchPage text='Crie um caderno para você!' picture={notebook} alt='Mulher escreven informações em um carderno'/>
     </Content> 
    </Container>
  )
}
