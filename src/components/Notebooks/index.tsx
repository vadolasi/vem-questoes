import { useModal } from "@/components/Modal"
import { graphql } from "@/gql"
import { useEffect, useState } from "react"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { toast } from "react-toastify"
import { useMutation, useQuery } from "urql"
import AddNotebookModal from "./AddNotebook"
import DeleteNotebookModal from "./DeleteNotebook"
import EditNotebookModal from "./EditNotebook"
import { BsFillPlayFill } from "react-icons/bs"
import { useRouter } from "next/navigation"
import clsx from "clsx"

const notebooksQuery = graphql(/* GraphQL */ `
  query Notebooks {
    notebooks {
      id
      name
      description
      questions {
        id
      }
    }
  }
`)

const addQuestionToNotebookMutation = graphql(/* GraphQL */ `
  mutation AddQuestionToNotebook($notebookId: String!, $questionId: String!) {
    addQuestionToNotebook(id: $notebookId, questionId: $questionId) {
      id
    }
  }
`)

const removeQuestionFromNotebookMutation = graphql(/* GraphQL */ `
  mutation RemoveQuestionFromNotebook($notebookId: String!, $questionId: String!) {
    removeQuestionFromNotebook(id: $notebookId, questionId: $questionId) {
      id
    }
  }
`)

interface IProps {
  enableAddQuestion?: boolean
  questionId?: string
}

const Notebooks: React.FC<IProps> = ({ questionId, enableAddQuestion = false }) => {
  const [firstLoad, setFirstLoad] = useState(true)
  const [{ fetching, data }, executeQuery] = useQuery({ query: notebooksQuery })
  const [{ fetching: loadingAddingNotebook }, executeAddQuestionToNotebook] = useMutation(addQuestionToNotebookMutation)
  const [{ fetching: loadingRemovingNotebook }, executeRemoveQuestionFromNotebook] = useMutation(removeQuestionFromNotebookMutation)
  const [showAddNotebookModal, updateAddNotebookModal, closeAddNotebookModal] = useModal(<></>, { bottom: false })
  const [showEditNotebookModal, updateEditNotebookModal, closeEditNotebookModal] = useModal(<></>, { bottom: false })
  const router = useRouter()

  const onAdd = () => {
    executeQuery({ requestPolicy: "network-only" })
    closeAddNotebookModal()
  }

  useEffect(() => {
    updateAddNotebookModal(<AddNotebookModal onAdd={onAdd} />)
  }, [])

  const onEdit = () => {
    closeEditNotebookModal()
    executeQuery({ requestPolicy: "network-only" })
  }

  const handleUpdateButtonClick = (notebookId: string, name: string, description?: string) => {
    updateEditNotebookModal(<EditNotebookModal description={description || ""} name={name} onAdd={onEdit} notebookId={notebookId} />)
    showEditNotebookModal()
  }

  const [showDeleteNotebookModal, updateDeleteNotebookModal, closeDeleteNotbookModal] = useModal(<></>, { bottom: false })

  const onDelete = () => {
    closeDeleteNotbookModal()
    executeQuery({ requestPolicy: "network-only" })
  }

  const handleDeleteNotebookButton = (notebookId: string) => {
    showDeleteNotebookModal()
    updateDeleteNotebookModal(<DeleteNotebookModal onAdd={onDelete} notebookToDelete={notebookId} />)
  }

  const handleQuestionAdd = async (notebookId: string) => {
    toast.promise(
      (async () => {
        const { error } = await executeAddQuestionToNotebook({ notebookId, questionId: questionId! })

        if (error) {
          throw new Error(error.message)
        }

        executeQuery({ requestPolicy: "network-only" })
      })(),
      {
        error: "Ocorreu um erro ao adicionar a questão ao caderno",
        pending: "Adicionando questão ao caderno",
        success: "Questão adicionada ao caderno com sucesso"
      }
    )
  }

  const handleQuestionRemove = async (notebookId: string) => {
    toast.promise(
      (async () => {
        const { error } = await executeRemoveQuestionFromNotebook({ notebookId, questionId: questionId! })

        if (error) {
          throw new Error(error.message)
        }

        executeQuery({ requestPolicy: "network-only" })
      })(),
      {
        error: "Ocorreu um erro ao remover a questão do caderno",
        pending: "Removendo questão do caderno",
        success: "Questão removida do caderno com sucesso"
      }
    )
  }

  useEffect(() => {
    if (!fetching) {
      setFirstLoad(false)
    }
  }, [fetching])

  return (
    <div>
      <div className={clsx("flex flex-col divide-y", enableAddQuestion && "max-h-96 overflow-y-auto")}>
        {firstLoad && fetching ? (
          <span className="loading loading-spinner" />
        ) : data?.notebooks.length! < 1 ? (
          <h1>Nenhum notebook!</h1>
        ) : data?.notebooks.map(notebook => (
          <div className="p-5 flex justify-between items-center" key={notebook.id}>
            <div className="flex flex-col overflow-x-hidden">
              <div className="tooltip" data-tip={notebook.name}>
                <p className="font-bold truncate text-left">{notebook.name}</p>
              </div>
              <div className="tooltip" data-tip={notebook.description}>
                <p className="truncate text-left">{notebook.description}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {enableAddQuestion && (
                <>
                  {notebook.questions.map(question => question.id).includes(questionId!) ? (
                    <button className="btn btn-circle btn-sm btn-outline" onClick={() => handleQuestionRemove(notebook.id)} disabled={loadingRemovingNotebook || fetching}>
                      <AiOutlineMinus />
                    </button>
                  ) : (
                    <button className="btn btn-circle btn-sm btn-outline" onClick={() => handleQuestionAdd(notebook.id)} disabled={loadingAddingNotebook || fetching}>
                      <AiOutlinePlus />
                    </button>
                  )}
                </>
              )}
              <div className="flex flex-col text-center font-bold px-5">
                <span>Questões</span>
                <span>{notebook.questions.length}</span>
              </div>
              {!enableAddQuestion && (
                <button className="btn btn-circle btn-sm btn-outline btn-primary" disabled={notebook.questions.length === 0} onClick={() => router.push(`/cadernos/${notebook.id}`)}>
                  <BsFillPlayFill />
                </button>
              )}
              <button className="btn btn-circle btn-sm btn-outline btn-error" onClick={() => handleDeleteNotebookButton(notebook.id)}>
                <AiOutlineDelete />
              </button>
              <button className="btn btn-circle btn-sm btn-outline" onClick={() => handleUpdateButtonClick(notebook.id, notebook.name, notebook.description!)}>
                <AiOutlineEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
      {enableAddQuestion && (
        <button className="btn btn-primary w-full" onClick={showAddNotebookModal}>Adicionar</button>
      )}
    </div>
  )
}

export default Notebooks
