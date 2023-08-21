import { useModal } from "@/components/Modal";
import { AiOutlineBook, AiOutlineComment, AiOutlineCompass, AiOutlineProfile } from "react-icons/ai";
import Explication from "./Explication";
import React from "react";

interface IProps {
  active?: boolean
}

const Extras: React.FC<IProps> = ({ active = true }) => {
  const showExplicationModal = useModal(<Explication />)
  const showCommentsModal = useModal(<></>)
  const showNotebooksModal = useModal(<></>)
  const showXRayModal = useModal(<></>)

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
