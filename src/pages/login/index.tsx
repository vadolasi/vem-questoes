import { useState } from 'react';

import  Image  from 'next/image'

import { Container, Background, Form } from "./styles";

import Logo from '../../assets/Logo.svg';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ButtonText } from '@/components/ButtonText';

import { gql, useQuery } from 'urql';
import { graphql } from '../../gql'

const LoginMutationDocument = graphql(/* GraphQL */ `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [result, executeMutation] = useQuery({
      query: LoginMutationDocument,
      variables: {
        email,
        password
      },
    });

    return (
      <Container>
       <Background/>
       <div className='form'>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
         <div className='InputWrapper'>
         <Input text="E-mail" type='email' placeholderText='exemplo@email.com' onChange={(e: any) => setEmail(e.target.value)}/>
         <Input text="Senha" type='password' placeholderText='Mínimo 8 caracteres' onChange={(e: any) => setPassword(e.target.value)}/>
         </div>

         <Button text='Entrar'/>

         <ButtonText text='Esqueceu sua senha?'/>
       </Form>
       </div>
      </Container>
    )
  }