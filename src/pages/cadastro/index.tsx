import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { NextPage } from "next"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input as MaterialInput } from "@material-tailwind/react"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone: z.string(),
  password: z.string(),
  passwordConfirmation: z.string()
})

type FormData = z.infer<typeof schema>

const Input = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => {
  return <MaterialInput ref={ref} {...props as any} />
})

const Page: NextPage = () => {
  const { handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur"
  })

  const onSubmit = handleSubmit(({}) => {
    console.log("Teste")
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Nome" />
      </form>
    </div>
  )
}

export default Page
