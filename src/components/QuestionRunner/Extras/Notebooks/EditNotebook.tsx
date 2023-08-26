import { graphql } from "@/gql"
import { useState } from "react"
import { toast } from "react-toastify"
import { useMutation } from "urql"

const updateNotebookMutation = graphql(/* GraphQL */ `
  mutation UpdateNotebook2($notebookId: String!, $name: String!, $description: String) {
    updateNotebook(notebookId: $notebookId, name: $name, description: $description)
  }
`)

interface IProps {
  name: string
  notebookId: string
  description: string | null
  onAdd: () => void
}

const EditNotebookModal: React.FC<IProps> = ({ onAdd, name, description, notebookId }) => {
  const [newName, setName] = useState(name)
  const [newDescription, setDescription] = useState<string | null>(description)
  const [{ fetching }, executeUpdateNotebook] = useMutation(updateNotebookMutation)

  const editNotebook = async () => {
    toast.promise(
      (async () => {
        const { error } = await executeUpdateNotebook({ notebookId, name: newName, description: newDescription })

        if (error) {
          throw new Error(error.message)
        }

        onAdd()
      })(),
      {
        error: "Ocorreu um erro ao editar o caderno",
        pending: "Editando caderno",
        success: "Caderno editado com sucesso"
      }
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nome</span>
        </label>
        <input type="text" className="input input-bordered w-full" value={newName} onChange={ev => setName(ev.currentTarget.value)} />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Descrição</span>
        </label>
        <textarea className="textarea textarea-bordered h-24 w-full" value={newDescription || ""} onChange={ev => setDescription(ev.currentTarget.value || null)}></textarea>
      </div>
      <button className="btn btn-primary w-full" onClick={editNotebook} disabled={fetching}>
        {fetching ? <span className="loading loading-spinner" /> : "Editar"}
      </button>
    </div>
  )
}

export default EditNotebookModal
