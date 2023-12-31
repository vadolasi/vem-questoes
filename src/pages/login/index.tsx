import { useState } from "react"
import Image from "next/image"
import { Container, Background, Form } from "../../components/styles/login"
import Logo from "../../assets/Logo.svg"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { ButtonText } from "@/components/ButtonText"
import { toast } from "react-toastify"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const params = useSearchParams()

  async function handleLogin() {
    if (!email && !password) {
      return toast.error("Preencha todos os campos")
    }
    setLoading(true)
    const data = (await signIn("credentials", { email, password, callbackUrl: params.get("callbackUrl") ?? "/" }))

    if (data?.error) {
      setEmail("")
      setPassword("")
      setLoading(false)
      return toast.error("Erro, verifique suas informações!")
    }
  }

  return (
    <Container>
      <Background />
      <div className="form">
        <Form>
          <Image src={Logo} alt="Logo Vem Questões" />
          <div className="InputWrapper">
            <Input text="E-mail" value={email} type="email" placeholder="exemplo@email.com" onChange={(e: any) => setEmail(e.target.value)} />
            <Input text="Senha" value={password} type="password" placeholder="Mínimo 8 caracteres" onChange={(e: any) => setPassword(e.target.value)} />
          </div>

          <Button className="w-full" loading={loading} onClick={handleLogin}>Entrar</Button>

          <ButtonText text="Esqueceu sua senha?" />
        </Form>
      </div>
    </Container>
  )
}
