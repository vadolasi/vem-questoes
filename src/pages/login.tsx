import  Image  from 'next/image'

import { Container, Background, Form } from "@/styles/pages/login"
import CoverImage from '../assets/LoginCover.png'
import Logo from '../assets/Logo.svg'

export default function Login() {
    return (
      <Container>
       <Background/>
       <Form>
         <Image src={Logo} alt="Logo Vem Questões"/>
       </Form>
      </Container>
    )
  }
  