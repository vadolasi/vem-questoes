import { graphql } from "@/gql"
import { useState } from "react"
import { toast } from "react-toastify"
import { useMutation } from "urql"

const addNotebookMutation = graphql(/* GraphQL */ `
  mutation addNotebook($name: String!, $description: String) {
    addNotebook(name: $name, description: $description) {
      id
    }
  }
`)

interface IProps {
  onAdd: () => void
}

const AddNotebookModal: React.FC<IProps> = ({ onAdd }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState<string | null>(null)
  const [, executeAddNotebook] = useMutation(addNotebookMutation)

  const addNotebook = async () => {
    toast.promise(
      (async () => {
        const { error } = await executeAddNotebook({ name, description })

        if (error) {
          throw new Error(error.message)
        }

        setName("")
        setDescription("")
        onAdd()
      })(),
      {
        error: "Ocorreu um erro ao criar o caderno",
        pending: "Criando caderno",
        success: "Caderno criado com sucesso"
      }
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nome</span>
        </label>
        <input type="text" className="input input-bordered w-full" value={name} onChange={ev => setName(ev.currentTarget.value)} />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Descrição</span>
        </label>
        <textarea className="textarea textarea-bordered h-24 w-full" value={description || ""} onChange={ev => setDescription(ev.currentTarget.value || null)}></textarea>
      </div>
      <button className="btn btn-primary w-full" onClick={addNotebook}>Adicionar</button>
    </div>
  )
}

export default AddNotebookModal
