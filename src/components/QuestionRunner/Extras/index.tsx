import { useModal } from "@/components/Modal";
import { AiOutlineBook, AiOutlineComment, AiOutlineCompass, AiOutlineProfile } from "react-icons/ai";
import Explication from "./Explication";
import Comments from "./Comments";
import React, { useEffect } from "react";

interface IProps {
  active?: boolean
  questionId: string
}

const Extras: React.FC<IProps> = ({ active = true, questionId }) => {
  const [showExplicationModal] = useModal(<Explication />)
  const [showCommentsModal, setCommentsModalContent] = useModal(<Comments questionId={questionId} />)
  const [showNotebooksModal] = useModal(<></>)
  const [showXRayModal] = useModal(<></>)

  useEffect(() => {
    setCommentsModalContent(<Comments questionId={questionId} />)
  }, [questionId])

  return (
    <ul className="flex gap-5">
      <li>
        <button
          onClick={showExplicationModal}
          disabled={!active}
          className="btn"
        >
          <AiOutlineCompass />
          <span>Explicação</span>
        </button>
      </li>
      <li>
        <button
          onClick={showCommentsModal}
          disabled={!active}
          className="btn"
        >
          <AiOutlineComment />
          <span>Comentários</span>
        </button>
      </li>
      <li>
        <button
          onClick={showNotebooksModal}
          disabled={!active}
          className="btn"
        >
          <AiOutlineBook />
          <span>Cadernos</span>
        </button>
      </li>
      <li>
        <button
          onClick={showXRayModal}
          disabled={!active}
          className="btn"
        >
          <AiOutlineProfile />
          <span>Raio-X</span>
        </button>
      </li>
    </ul>
  )
}

export default Extras
