import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

import { Container, Background, Form } from "../../components/styles/login";

import Logo from '../../assets/Logo.svg';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ButtonText } from '@/components/ButtonText';

import { useMutation } from 'urql';
import { graphql } from '@/gql';
import { toast } from 'react-toastify';
import useUserStore from '@/store';

const LoginMutation = graphql(/* GraphQL */ `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      role
    }
  }
`);

export default function Login() {
  const { setId, setIsAdmin, setIsLogged } = useUserStore()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [, executeMutation] = useMutation(LoginMutation);
  const router = useRouter();

  async function handleLogin() {
    if (!email && !password) {
      return toast.error('Preencha todos os campos')
    }
    setLoading(true)
    executeMutation({ email, password }).then((result): any => {
      if (result.data?.login) {
        setId(result.data.login.id)
        setIsAdmin(["ADMIN", "DEVELOPER"].includes(result.data.login.role))
        setIsLogged(false)
        setLoading(false)
        return router.push('/');
      }
      if (result.error) {
        setEmail('')
        setPassword('')
        setLoading(false)
        return toast.error('Erro, verifique suas informações!')
      }
    })

  }

  return (
    <Container>
      <Background />
      <div className='form'>
        <Form>
          <Image src={Logo} alt="Logo Vem Questões" />
          <div className='InputWrapper'>
            <Input text="E-mail" value={email} type='email' placeholder='exemplo@email.com' onChange={(e: any) => setEmail(e.target.value)} />
            <Input text="Senha" value={password} type='password' placeholder='Mínimo 8 caracteres' onChange={(e: any) => setPassword(e.target.value)} />
          </div>

          <Button className="w-full" loading={loading} onClick={handleLogin}>Entrar</Button>

          <ButtonText text='Esqueceu sua senha?' />
        </Form>
      </div>
    </Container>
  )
}
