import  Image  from 'next/image'

import { Container, Background, Form } from "@/styles/pages/login"
import Logo from '../assets/Logo.svg'
import { Input } from '@/components/Input'

export default function Login() {
    return (
      <Container>
       <Background/>
       <div className='form'>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
         <Input text="E-mail"/>
         <Input text="Senha"/>
       </Form>
       </div>
      </Container>
    )
  }
  