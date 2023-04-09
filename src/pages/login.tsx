import  Image  from 'next/image'

import { Container, Background, Form } from "@/styles/pages/login"
import Logo from '../assets/Logo.svg'

export default function Login() {
    return (
      <Container>
       <Background/>
       <div>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
       </Form>
       </div>
      </Container>
    )
  }
  