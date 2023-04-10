import  Image  from 'next/image'

import { Container, Background, Form } from "./styles";

import Logo from '../../assets/Logo.svg';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ButtonText } from '@/components/ButtonText';


export default function Login() {
    return (
      <Container>
       <Background/>
       <div className='form'>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
         <div className='InputWrapper'>
         <Input text="E-mail"  type='text' placeholderText='exemplo@email.com'/>
         <Input text="Senha"  type='password' placeholderText='Mínimo 8 caracteres'/>
         </div>

         <Button text='Entrar'/>

         <ButtonText text='Esqueceu sua senha?'/>
       </Form>
       </div>
      </Container>
    )
  }
  