import  Image  from 'next/image'

import { Container, Background, Form } from "./styles"
import Logo from '../../assets/Logo.svg'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Login() {
    return (
      <Container>
       <Background/>
       <div className='form'>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
         <div className='InputWrapper'>
         <Input text="E-mail"/>
         <Input text="Senha"/>
         </div>

         <Button text='Entrar'/>
       </Form>
       </div>
      </Container>
    )
  }
  