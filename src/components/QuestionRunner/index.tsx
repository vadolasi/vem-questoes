import { GoTo, QuestionStatement } from "../styles/banco-de-questoes"
import { toast } from "react-toastify"
import Confetti from "react-confetti"
import Pagination from "../Pagination"
import { AiOutlineDelete, AiOutlineRedo, AiOutlineRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import Report from "../Report"
import { useImmer } from "use-immer"
import { useWindowDimensions } from "@/hooks/useWindowDimensions"
import Extras from "./Extras"
import clsx from "clsx"

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

      setDeletedAlternatives([])
    }
  }

  function deleteAlternative(id: string) {
    if (deletedAlternatives.includes(id)) {
      setDeletedAlternatives(alternatives => alternatives.filter(alternative => alternative !== id))
    } else {
      setDeletedAlternatives(alternatives => {alternatives.push(id)})
    }
  }

  useEffect(() => {
    setQuestionInput(questionNumber)
    setCorrect(null)
    setSelected(null)
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
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mt-10 gap-10">
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
      </div>

      <QuestionStatement>
        <div className="title">
          <h1 className="text-3xl font-medium">Questão {questionNumber}</h1>
          <Report questionId={question?.id} />
        </div>

        <div className="questionInfo">
          {loadingQuestion ? (
            <div className="load">
              <p>Carregando...</p>
            </div>
          ) : (
            <p className="text-lg">{question?.enunciado}</p>
          )}
          <ul className="flex flex-col md:flex-row justify-start">
            <li className="flex gap-1 justify-start">
              <strong className="text-left">Ano:</strong>
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : question?.ano}
            </li>
            <li className="flex gap-1">
              <strong>Banca:</strong>{" "}
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span>{question?.banca}</span>
              )}
            </li>
            <li className="flex gap-1">
              <strong>Prova:</strong>{" "}
              {loadingQuestion ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span>{question?.processoSeletivo}</span>
              )}
            </li>
          </ul>
        </div>

        <ul className="w-full flex flex-col gap-3 mt-5">
          {question?.alternatives &&
            question?.alternatives.map(alternative => (
              <li
                className="group w-full relative flex items-center gap-2"
                key={alternative.id}
              >
                <button
                  onClick={() => {!(deletedAlternatives.includes(alternative.id) || Boolean(correct)) && setSelected(alternative.id)}}
                  className={clsx(
                    "btn btn-circle btn-sm",
                    selected == alternative.id && "btn-primary",
                    correct == alternative.id && "btn-success",
                    selected == alternative.id && correct !== null && correct !== alternative.id && "btn-error",
                    selected !== alternative.id && correct !== alternative.id && "btn-outline",
                    selected == alternative.id || correct == alternative.id && "btn-active",
                    deletedAlternatives.includes(alternative.id) || Boolean(correct) && "no-animation"
                  )}
                  disabled={deletedAlternatives.includes(alternative.id)}
                >
                  {alternative.letter}
                </button>
                <p className={clsx(deletedAlternatives.includes(alternative.id) && "line-through")}>{loadingQuestion ? "Carregando..." : alternative.text}</p>
                <button
                  className={clsx("btn btn-sm btn-outline btn-circle sm:hidden sm:group-hover:flex items-center justify-center", deletedAlternatives.includes(alternative.id) ? "btn-primary" : "btn-error")}
                  onClick={() => {
                    deleteAlternative(alternative.id)
                    if (selected === alternative.id) {
                      setSelected(null)
                    }
                  }}
                >
                  {deletedAlternatives.includes(alternative.id) ? <AiOutlineRedo /> : <AiOutlineDelete />}
                </button>
              </li>
            ))}
        </ul>
      </QuestionStatement>
      <div className="flex flex-wrap md:flex-nowrap justify-between mt-10 gap-5">
        {correct ? (
          <button className="btn btn-primary w-full md:w-auto" onClick={() => setQuestionNumber(questionNumber + 1)}>Próximo</button>
        ) : (
          <button className="btn btn-primary w-full md:w-auto" disabled={loadingReponse} onClick={answerQuestion}>
            {loadingReponse ? <span className="loading loading-spinner" /> : "Responder"}
          </button>
        )}
        {extras && <Extras active={active} questionId={question?.id!} />}
      </div>
    </div>
  )
}
