import { graphql } from "@/gql"
import typing from "../../../assets/typing.png"
import Image from "next/image"
import { useMutation, useQuery } from "urql"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { FiEdit, FiTrash } from "react-icons/fi"
import { useModal } from "@/components/Modal"
import { useSession } from "next-auth/react"

interface IProps {
  questionId: string | undefined
}

const commentsQuery = graphql(/* GraphQL */ `
  query Comments($questionId: String!) {
    comments(questionId: $questionId) {
      id
      content
      user {
        id
        name
        photoUrl
      }
    }
  }
`)

const addCommentMutation = graphql(/* GraphQL */ `
  mutation AddComment($questionId: String!, $content: String!) {
    addComment(questionId: $questionId, content: $content)
  }
`)

const deleteCommentMutation = graphql(/* GraphQL */ `
  mutation DeleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`)

const editCommentMutation = graphql(/* GraphQL */ `
  mutation EditComment($commentId: String!, $content: String!) {
    editComment(commentId: $commentId, content: $content)
  }
`)

const Comments: React.FC<IProps> = ({ questionId }) => {
  const session = useSession()
  const user = session.data?.user as { id: string, isAdmin: boolean }
  const [content, setContent] = useState("")
  const [newContent, setNewContent] = useState("")
  const [{ fetching: loadingComments, data: commentsQueryData }, executeQuery] = useQuery({ query: commentsQuery, variables: { questionId: questionId || "" }, pause: questionId === undefined })
  const [{ fetching: loadingAddComment }, executeAddCommentMutation] = useMutation(addCommentMutation)
  const [, executeDeleteComment] = useMutation(deleteCommentMutation)
  const [, executeEditComment] = useMutation(editCommentMutation)
  const [currentComment, setCurrentComment] = useState<string | null>(null)
  const [currentContent, setCurrentContent] = useState<string | null>(null)

  const deleteComment = () => {
    toast.promise(
      (async () => {
        const { error } = await executeDeleteComment({ commentId: currentComment! })
        if (error) {
          throw new Error(error.message)
        }
        setCurrentComment(null)
        executeQuery({ requestPolicy: "network-only" })
      })(),
      {
        error: "Ocorreu um erro ao deletar o comentário!",
        pending: "Deletando comentário",
        success: "Comentário deletado com sucesso!"
      }
    )
  }

  const [showDeleteModal, editDeleteModal] = useModal(<></>, { bottom: false })

  const editComment = () => {
    toast.promise(
      (async () => {
        const { error } = await executeEditComment({ commentId: currentComment!, content: newContent })
        if (error) {
          throw new Error(error.message)
        }
        setCurrentComment(null)
        setCurrentContent(null)
        executeQuery({ requestPolicy: "network-only" })
      })(),
      {
        error: "Ocorreu um erro ao editar o comentário!",
        pending: "Editando comentário",
        success: "Comentário editado com sucesso!"
      }
    )
  }

  const [showEditModal, editEditModal] = useModal(<></>, { bottom: false })

  useEffect(() => {
    editDeleteModal(
      <div className="w-full flex flex-col items-center">
        <span className="text-lg">Deseja deletar este comentário?</span>
        <div className="w-full flex mt-5 justify-center">
          <form method="dialog">
            <button className="btn btn-primary">Cancelar</button>
            <button className="btn ml-3" onClick={deleteComment}>Confirmar</button>
          </form>
        </div>
      </div>
    )
    editEditModal(
      <div className="w-full flex flex-col items-center">
        <span className="text-lg">Editar comentário</span>
        <textarea className="textarea textarea-bordered h-24 w-full" value={newContent} onChange={ev => setNewContent(ev.currentTarget.value)}></textarea>
        <div className="w-full flex mt-5 justify-center">
          <form method="dialog" className="w-full flex gap-3">
            <button className="btn btn-primary w-1/2 flex-1">Cancelar</button>
            <button className="btn w-1/2 flex-1" onClick={editComment} disabled={newContent === currentContent || !newContent}>Confirmar</button>
          </form>
        </div>
      </div>
    )
  }, [currentContent, newContent, currentComment])

  const addComment = () => {
    if (content && questionId) {
      toast.promise(
        (async () => {
          const { error } = await executeAddCommentMutation({ questionId, content })
          if (error) {
            throw new Error(error.message)
          }
          setContent("")
          executeQuery({ requestPolicy: "network-only" })
        })(),
        {
          error: "Ocorreu um erro ao adicionar o seu comentário!",
          pending: "Adicionando comentário",
          success: "Comentário adicionado com sucesso!"
        }
      )
    }
  }

  return (
    <div>
      <h1 className="font-medium">Comentários</h1>
      <div>
        {loadingComments ? (
          <div className="w-full h-sull flex items-center justify-center">
            <span className="loading loading-spinner"></span>
          </div>
        ) : commentsQueryData && commentsQueryData.comments.length > 0 ? (
          <ul className="my-5 flex flex-col gap-3 max-h-96 overflow-y-auto overflow-x-hidden">
            {commentsQueryData.comments.map(comment => (
              <li className="group relative flex gap-2" key={comment.id}>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src={comment.user.photoUrl} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium tetx-sm">{comment.user.name}</span>
                  <p className="text-sm break-words">{comment.content}</p>
                </div>
                <div className={clsx("absolute right-5 h-full group-hover:flex items-center gap-2 hidden", (comment.user.id === user?.id || user?.isAdmin) && "group-hover:flex")}>
                  <button
                    className="btn btn-xs btn-circle btn-outline"
                    onClick={() => {
                      setCurrentComment(comment.id)
                      setCurrentContent(comment.content)
                      setNewContent(comment.content)
                      showEditModal()
                    }}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="btn btn-xs btn-circle btn-outline btn-error"
                    onClick={() => {
                      setCurrentComment(comment.id)
                      showDeleteModal()
                    }}
                  >
                    <FiTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center gap-2 flex-col my-5">
            <span>Nenhum comentário por aqui...</span>
            <Image src={typing} height={300} alt="Digitando" />
            <span>...que tal ser o primeiro a comentar?</span>
          </div>
        )}
      </div>
      <div className="join w-full">
        <input
          disabled={loadingAddComment}
          type="text"
          placeholder="Digite seu comentário..."
          className="join-item input input-sm input-bordered w-full"
          value={content}
          onChange={ev => setContent(ev.currentTarget.value)}
        />
        <button disabled={loadingAddComment} className="join-item btn btn-sm" onClick={addComment}>&gt;</button>
      </div>
    </div>
  )
}

export default Comments
