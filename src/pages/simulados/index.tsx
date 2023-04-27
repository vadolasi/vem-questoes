import Image from 'next/image';

import { Container, Content, Search } from './styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { SearchInput } from '@/components/SearchInput';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';


import simulado from '@/assets/Test.png'

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu/>
     <Content>
      <Search>
        <SearchInput/>
        <Select label='Tipo' options={['Aleatório', 'Personalizado']}/>
        <Button text='Criar'/>
      </Search>
        <DefaultSearchPage text='Você não possui simulados' picture={simulado} alt='Mulher resolvendo uma prova'/>
     </Content> 
    </Container>
  )
}
