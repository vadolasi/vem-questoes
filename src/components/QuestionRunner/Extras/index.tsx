import { useModal } from "@/components/Modal";
import { AiOutlineBook, AiOutlineComment, AiOutlineCompass, AiOutlineProfile } from "react-icons/ai";
import Explication from "./Explication";
import Comments from "./Comments";
import Notebooks from "@/components/Notebooks/index"
import React, { useEffect } from "react";

interface IProps {
  active?: boolean
  questionId: string
}

const Extras: React.FC<IProps> = ({ active = true, questionId }) => {
  const [showExplicationModal] = useModal(<Explication />)
  const [showCommentsModal, setCommentsModalContent] = useModal(<Comments questionId={questionId} />)
  const [showNotebooksModal, setNotebooksModalContent] = useModal(<Notebooks questionId={questionId} enableAddQuestion={true} />)
  const [showXRayModal] = useModal(<></>)

  useEffect(() => {
    setCommentsModalContent(<Comments questionId={questionId} />)
    setNotebooksModalContent(<Notebooks questionId={questionId} enableAddQuestion={true} />)
  }, [questionId])

  return (
    <div className="flex gap-5 flex-wrap md:flex-nowrap">
      <button
        onClick={showExplicationModal}
        disabled={!active}
        className="btn w-full md:w-auto"
      >
        <AiOutlineCompass />
        <span>Explicação</span>
      </button>
      <button
        onClick={showCommentsModal}
        disabled={!active}
        className="btn w-full md:w-auto"
      >
        <AiOutlineComment />
        <span>Comentários</span>
      </button>
      <button
        onClick={showNotebooksModal}
        disabled={!active}
        className="btn w-full md:w-auto"
      >
        <AiOutlineBook />
        <span>Cadernos</span>
      </button>
      <button
        onClick={showXRayModal}
        disabled={!active}
        className="btn w-full md:w-auto"
      >
        <AiOutlineProfile />
        <span>Raio-X</span>
      </button>
    </div>
  )
}

export default Extras
