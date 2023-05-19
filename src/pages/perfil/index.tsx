import Image from 'next/image';
import {FiCamera} from 'react-icons/fi'

import { Container, Content, Form, Avatar } from '../../components/styles/perfil';


import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';


import avatar from '../../assets/profile/userProfile.svg'

export default function Home() {
  return (
    <Container>
     <Header/>
     <Menu page='profile'/>
     <Content>
      <header></header>
      <Form>
        <Avatar>
        <Image
                    src={avatar}
                    alt="Foto do usuário"
          />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                        type="file"
                        id="avatar"
                        />
                    </label>
        </Avatar>

        <Input
            text='Nome'
            placeholderText="Nome"
            type="text"
        />

        <Input
          text="E-Mail"
          placeholderText="E-Mail"
          type="text"
        />

        <Input
          text="Senha atual"
          placeholderText="Senha atual"
          type="password"
        />

        <Input
          text="Nova senha"
          placeholderText="Nova senha"
          type="password"
         />

         <Button>Salvar</Button>
      </Form>
     </Content>
    </Container>
  )
}
