import Image from 'next/image';

import { Container, Content, Search } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';


import raioX from '@/assets/raiox.png'

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu page='raio-x'/>
     <Content>
      <Search>
        <SearchInput/>
        <Select label='Banca' options={['nada']}/>
        <Button text='Buscar'/>
      </Search>
        <DefaultSearchPage text='Raio-X completo da sua prova!' picture={raioX} alt='Mulher avaliando informações sobre algo'/>
     </Content> 
    </Container>
  )
}
