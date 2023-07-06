import React, {useEffect, useState} from "react"
import { Container } from "./styles"
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete, AiOutlinePlus, AiOutlineMinus, AiOutlineRead} from "react-icons/ai"
import { graphql } from "@/gql"
import { useMutation } from "urql"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Tooltip } from "react-tooltip"

interface NotebookCardProps {
  id: string
  title: string,
  description: string,
  questions: any[],
  deleteClick?: any,
  add?: boolean,
  addFunction?: () => void,
  removeFunction?: () => void
  edit?: boolean,
  currentQuestion?: string
}

const updateNotebookMutation = graphql(/* GraphQL */ `
  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {
    updateNotebook(
      notebookId: $id
      name: $name
      description: $description
      questions: $questions
    )
  }
`)

export const NotebookCard: React.FC<NotebookCardProps> = ({ id, title, description, questions, deleteClick, add, edit, currentQuestion, addFunction, removeFunction }) => {
  const [titleCard, setTitleCard] = useState(title);
  const [descriptionCard, setDescriptionCard] = useState(description);
  const [editing, setEditing] = useState(true);
  const [, executeMutation] = useMutation(updateNotebookMutation)

  const router = useRouter()

  const _editNotebook = async () => {
    await executeMutation({ id, name: titleCard, description: descriptionCard })
  }

  const editNotebook = async () => {
    toast.promise(
      _editNotebook(),
      {
        error: "Ocorreu um erro ao editar o caderno",
        pending: "Editando caderno",
        success: "Caderno editado com sucesso"
      }
    )
  }

  useEffect(() => {
    if (titleCard !== title || descriptionCard !== description) {
      editNotebook()
    }
  }, [editing])

  return (
    <Container>
      <div className="Titulos">
        {editing ? (
          <>
            <span className="title" data-tooltip-id="tooltip" data-tooltip-content={titleCard}>
              {titleCard}
            </span>
            <span className="description" data-tooltip-id="tooltip" data-tooltip-content={descriptionCard}>
              {descriptionCard}
            </span>
          </>
        ) : (
          <>
            <input type="text" className="title edit" value={titleCard} onChange={e => setTitleCard(e.target.value)} />
            <input type="text" className="description edit" readOnly={editing} value={descriptionCard} onChange={e => setDescriptionCard(e.target.value)} />
          </>
        )}
      </div>

      <div className="Questions">
        <h1>Questões<br/>{questions.length}</h1>
      </div>

      <div className="Buttons">
        {add ? (
          questions.map(question => question.id).includes(currentQuestion) ? (
            <button onClick={removeFunction}><AiOutlineMinus/></button>
          ) : (
            <button onClick={addFunction}><AiOutlinePlus/></button>
          )
        ) : (
          <button id={`open-button-${id}`} onClick={() => questions.length > 0 && router.push(`/cadernos/${id}`)}><AiOutlineRead/></button>
        )}
        {edit && (
          <>
            <button onClick={() => setEditing(!editing)}> {editing ? <AiOutlineEdit/> : <AiOutlineCheck/> }</button>
            <button onClick={deleteClick}><AiOutlineDelete/></button>
          </>
        )}
      </div>
      {questions.length === 0 && (
        <Tooltip
          anchorSelect={`#open-button-${id}`}
          content="Adicione questões a esse caderno!"
          clickable={true}
        />
      )}
    </Container>
  )
}
