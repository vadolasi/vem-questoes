import { graphql } from "@/gql"
import { toast } from "react-toastify"
import { useMutation } from "urql"

const deleteNotebookMutation = graphql(/* GraphQL */ `
  mutation DeleteNotebook($id: String!) {
    deleteNotebook(id: $id)
  }
`)

interface IProps {
  onAdd: () => void
  notebookToDelete: string
}

const DeleteNotebookModal: React.FC<IProps> = ({ onAdd, notebookToDelete }) => {
  const [{ fetching }, executeDeleteNotebook] = useMutation(deleteNotebookMutation)

  const deleteNotebook = () => {
    toast.promise(
      (async () => {
        const { error } = await executeDeleteNotebook({ id: notebookToDelete })

        if (error) {
          throw new Error(error.message)
        }

        onAdd()
      })(),
      {
        error: "Ocorreu um erro ao deletar o caderno",
        pending: "Deletendo caderno",
        success: "Caderno deletado com sucesso"
      }
    )
  }

  return (
    <div>
      <span className="text-lg">Deseja deletar o caderno?</span>
      <div className="flex gap-4 mt-5">
        <form method="dialog" className="w-full flex-1">
          <button className="btn btn-primary w-full">Cancelar</button>
        </form>
        <button className="btn w-full flex-1" onClick={deleteNotebook} disabled={fetching}>
          {fetching ? (
            <span className="loading loading-spinner" />
          ) : "Confirmar"}
        </button>
      </div>
    </div>
  )
}

export default DeleteNotebookModal
