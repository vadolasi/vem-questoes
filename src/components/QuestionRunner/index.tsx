import {
  GoTo,
  Navigation,
  QuestionStatement,
  QuestionButtons,
} from "../styles/banco-de-questoes"
import { toast } from "react-toastify"
import Confetti from "react-confetti"
import Pagination from "../Pagination"
import { AiOutlineBook, AiOutlineComment, AiOutlineCompass, AiOutlineDelete, AiOutlineProfile, AiOutlineRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import Report from "../Report"
import { Button } from "../Button"
import { useImmer } from "use-immer"
import { useWindowDimensions } from "@/hooks/useWindowDimensions"
import Extras from "./Extras"

interface Props {
  totalQuantity: number
  questionNumber: number
  setQuestionNumber: (question: number) => void
  question?: {
    id: string
    enunciado: string
    banca: string
    ano: number
    processoSeletivo: string
    alternatives: {
      id: string
      text: string
      letter: string
    }[]
  }
  loadingQuestion: boolean
  loadingReponse: boolean
  resolveQuestion: (altervative: string) => Promise<string>
  confetti?: boolean
  extras?: boolean
  active?: boolean
}

export default function QuestionRunner({
  totalQuantity,
  questionNumber,
  setQuestionNumber,
  question,
  loadingQuestion,
  loadingReponse,
  resolveQuestion,
  confetti = false,
  extras = false,
  active = true
}: Props) {
  const [questionInput, setQuestionInput] = useState(questionNumber)
  const [deletedAlternatives, setDeletedAlternatives] = useImmer<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [correct, setCorrect] = useState<string | null>(null)
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const { width, height } = useWindowDimensions();

  async function answerQuestion() {
    if (!selected) {
      toast.error("Selecione uma alternativa")
    } else {
      const correct = await resolveQuestion(selected)

      setCorrect(correct)

      if (correct === selected && confetti) {
        setIsConfettiActive(true)
      }
    }
  }

  function deleteAlternative(id: string) {
    if (deletedAlternatives.includes(id)) {
      setDeletedAlternatives(alternatives => alternatives.filter(alternative => alternative !== id))
    } else {
      setDeletedAlternatives(alternatives => alternatives.push(id))
    }
  }

  useEffect(() => {
    setQuestionInput(questionNumber)
  }, [questionNumber])

  return (
    <div>
      {isConfettiActive && height && width && (
        <Confetti
          recycle={false}
          onConfettiComplete={() => setIsConfettiActive(false)}
          width={width}
          height={height}
          colors={[
            "#f44336",
            "#FF3600",
            "#FF5722",
            "#9c27b0",
            "#990099",
            "#3f51b5",
            "#2196f3",
            "#00CFFF",
            "#03a9f4",
            "#00bcd4",
            "#82E7FF"
          ]}
        />
      )}
      <Navigation>
        <span>{totalQuantity} questões</span>

        <Pagination currentPage={questionNumber} setCurrentPage={setQuestionNumber} totalPages={totalQuantity} />

        <GoTo>
          <input
            type="number"
            min={1}
            max={totalQuantity}
            value={questionInput}
            onChange={e => setQuestionInput(e.currentTarget.valueAsNumber)}
          />
          <span>Ir Para</span>
          <button onClick={() => setQuestionNumber(questionInput)}>
            <AiOutlineRight />
          </button>
        </GoTo>
      </Navigation>

      <QuestionStatement>
        <div className="title">
          <h1>Questão {questionNumber}</h1>
          <Report questionId={question?.id} />
        </div>

        <div className="questionInfo">
          {loadingQuestion ? (
            <div className="load">
              <p>Carregando...</p>
            </div>
          ) : (
            <p>{question?.enunciado}</p>
          )}
          <ul>
            <li>
              <strong>Ano:</strong>{" "}
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : question?.ano}
            </li>
            <li>
              <strong>Banca:</strong>{" "}
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span>{question?.banca}</span>
              )}
            </li>
            <li>
              <strong>Prova:</strong>{" "}
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span>{question?.processoSeletivo}</span>
              )}
            </li>
          </ul>
        </div>

        <ul className="questionAlternatives">
          {question?.alternatives &&
            question?.alternatives.map(alternative => (
              <li
                className={
                  deletedAlternatives.includes(alternative.id)
                    ? "deleted"
                    : ""
                }
                key={alternative.id}
              >
                <button
                  onClick={() => setSelected(alternative.id)}
                  className={`${
                    selected == alternative.id && "selected"
                  } ${
                    correct == alternative.id
                      ? "certo"
                      : `${
                          selected === alternative.id &&
                          correct && "errado"
                        }`
                  }`}
                  disabled={
                    deletedAlternatives.includes(alternative.id) ||
                    Boolean(correct)
                  }
                >
                  {alternative.letter}
                </button>
                <p>{loadingQuestion ? "Carregando..." : alternative.text}</p>
                <button
                  className="delete"
                  onClick={() => deleteAlternative(alternative.id)}
                >
                  <AiOutlineDelete />
                </button>
              </li>
            ))}
        </ul>
      </QuestionStatement>
      <QuestionButtons>
        <div className="resposta">
          {correct ? (
            <Button onClick={() => setQuestionNumber(questionNumber + 1)}>Próximo</Button>
          ) : (
            <Button onClick={answerQuestion} loading={loadingReponse}>Responder</Button>
          )}
        </div>
        {extras && <Extras active={active} />}
      </QuestionButtons>
    </div>
  )
}
