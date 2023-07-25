import { useState, useEffect } from 'react';
import Image from 'next/image';

import { AiOutlineHourglass, AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons  } from '../../components/styles/raiz';
import { AiOutlineRight, AiOutlineLeft, AiOutlineDelete} from 'react-icons/ai'
import { ContainerPagination, ButtonPagination, MenuPagination } from '../../components/styles';

import { Container, Content} from '../../components/styles/simulados';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { TimerInverse } from '@/components/TimerInverse';

import { graphql } from '@/gql';
import { useQuery, useMutation } from 'urql';

import { SpinnerCircular } from 'spinners-react';

import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router'
import Layout from '@/components/layout';
import { useTimer, useStopwatch, TimerResult, StopwatchResult } from 'react-timer-hook';

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetSimulado2($id: String!) {
    simulado(id: $id) {
      totalMinutes
      totalQuestions
      questions {
        id
        enunciado
        alternatives {
          id
          letter
          text
        }
        ano {
          ano
        }
        banca {
          name
        }
        processoSeletivo {
          name
        }
      }
    }
  }
`)

const resolverQuestionMutation = graphql(/* GraphQL */ `
  mutation ResolveQuestionOdSimulado2($questionId: String!, $alternativeId: String!, $simuladoId: String!) {
    addAnswer(
      questionId: $questionId
      alternativeId: $alternativeId
      simuladoId: $simuladoId
    ) {
      correct
      correctAlternative
    }
  }
`)

export default function Questoes() {
  const params = useSearchParams()
  const router = useRouter()
  const id = router.query.id as string

  const [questionNumber, setQuestionNumber] = useState(1)
  const [questionInput, setQuestionInput] = useState(1)
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [, resolveQuestion] = useMutation(resolverQuestionMutation)

  const [alternativeDeleted, setAlternativeDeleted] = useState<string[]>([]);

  const [isSelected, setIsSelected] = useState<string | null>(null);

  const [isCorrect, setIsCorrect] = useState<string | null>(null);

  const mode = params.get("mode")

  const timer = useTimer({ expiryTimestamp: new Date() })
  const stopwatch = useStopwatch()

  let counter: TimerResult | StopwatchResult

  if (mode === "raiz") {
    counter = timer
  } else {
    counter = stopwatch
  }

  const [resultQuestion, getQuestions] = useQuery({
    query: getQuestionQuery,
    variables: {
      id: id!
    }
  })

  const { data, fetching } = resultQuestion

  useEffect(() => {
    if (mode === "raiz") {
      timer.restart(new Date(Date.now() + (data?.simulado.totalMinutes || 0) * 60000), false)
    }
  }, [data, mode])

  const currentQuestion = data?.simulado.questions[questionNumber];
  const pages = data?.simulado.questions?.map((_, index) => index + 1) || [];

  function handleAlternativeDeleted(alternativeID: string){
    const alredyDeleted = alternativeDeleted.includes(alternativeID)

    if (alredyDeleted) {
      const filteredDeleted = alternativeDeleted.filter(alternative => alternative !== alternativeID)
      setAlternativeDeleted(filteredDeleted)
    } else {
      setAlternativeDeleted(prevState => [...prevState, alternativeID]);
    }
  }


  async function answerQuestion() {
    if (!isSelected) {
      return toast.error("Selecione uma alternativa")
    }
    if (isCorrect) {
      setQuestionNumber(questionNumber + 1)
      return
    }
    if (currentQuestion?.alternatives) {
      const result = await resolveQuestion({ questionId: currentQuestion.id, alternativeId: isSelected, simuladoId: id! })
      setIsCorrect(result.data?.addAnswer.correctAlternative || null)
      if (result.data?.addAnswer.correct) {
        setIsConfettiActive(true)
      }
    }
  }

  function handleChangeQuestionByInput() {
    if (data?.simulado.questions.length) {
      if (questionInput >= 1 && questionInput <= data?.simulado.questions.length) {
        setQuestionNumber(questionInput)
      } else {
        setQuestionNumber(1)
        toast.error('Coloque um valor válido')
      }
    }
  }

  useEffect(() => {
    setQuestionInput(questionNumber)
    setIsCorrect(null)
    setIsSelected(null)
  }, [questionNumber])

  const toggle = () => {
    if (counter.isRunning) {
      counter.pause()
    } else {
      counter.start()
    }
  }

  return (
    <Layout page="simulados">
     <Content>
        <TimerInverse>
              <h1>Simulado modo {mode === "raiz" ? "raiz" : "nutella"}</h1>
            <div className='TimerContainer'>
                <AiOutlineHourglass/>
            <div className='Timer'>
                <span>{counter.hours.toString().padStart(2, "0")}:</span>
                <span>{counter.minutes.toString().padStart(2, "0")}:</span>
                <span>{counter.seconds.toString().padStart(2, "0")}</span>
            </div>
                <button onClick={toggle}>{counter.isRunning ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}</button>
            </div>
        </TimerInverse>
        <QuestionContainer>

        <Navigation>
              <span>{(data?.simulado.questions.length || 0)} questões</span>

              {pages && questionNumber && (
                <ContainerPagination>
                  <ButtonPagination onClick={() => setQuestionNumber(questionNumber - 1)}  disabled={questionNumber==1}>
                    <AiOutlineLeft />
                  </ButtonPagination>
                  <MenuPagination>

                    {questionNumber <= 5 ? <>
                      <button className={questionNumber == 1 ? 'current' : ''} onClick={() => setQuestionNumber(1)}>
                        1
                      </button>
                      <button className={questionNumber == 2 ? 'current' : ''} onClick={() => setQuestionNumber(2)}>
                        2
                      </button>
                      <button className={questionNumber == 3 ? 'current' : ''} onClick={() => setQuestionNumber(3)}>
                        3
                      </button>
                      <button className={questionNumber == 4 ? 'current' : ''} onClick={() => setQuestionNumber(4)}>
                         4
                      </button>
                      <button className={questionNumber == 5 ? 'current' : ''} onClick={() => setQuestionNumber(5)}>
                         5
                      </button>
                      <button className={questionNumber == 6 ? 'current' : ''} onClick={() => setQuestionNumber(6)}>
                         6
                      </button>
                      <button className={questionNumber == 7 ? 'current' : ''} onClick={() => setQuestionNumber(7)}>
                         7
                      </button>

                      <button className={questionNumber == 8 ? 'current' : ''} onClick={() => setQuestionNumber(8)}>
                         8
                      </button>
                      <button className={questionNumber == 9 ? 'current' : ''} onClick={() => setQuestionNumber(9)}>
                         9
                      </button>
                    </> : <>
                    <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber-4)}>
                              {questionNumber - 4}
                    </button>
                    <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber-3)}>
                              {questionNumber - 3}
                    </button>
                    <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber-2)}>
                              {questionNumber - 2}
                    </button>
                    <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber-1)}>
                              {questionNumber - 1}
                    </button>
                    <button
                              className='current'>
                              {questionNumber}
                      </button>
                      <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber+1)}>
                              {questionNumber + 1}
                      </button>
                      <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber+2)}>
                              {questionNumber + 2}
                      </button>
                      <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber+3)}>
                              {questionNumber + 3}
                      </button>
                      <button
                              className='' onClick={() => setQuestionNumber(questionNumber => questionNumber+4)}>
                              {questionNumber + 4}
                      </button>

                    </>}




                  </MenuPagination>
                  <ButtonPagination onClick={() => setQuestionNumber(questionNumber + 1)} >
                    <AiOutlineRight />
                  </ButtonPagination>

                </ContainerPagination>
              )}


              <GoTo>
                <input type='number' min={1} value={questionInput} onChange={(e: any) => setQuestionInput(Number(e.target.value))} />
                <span>Ir Para</span>
                <button onClick={handleChangeQuestionByInput}><AiOutlineRight /></button>
              </GoTo>

            </Navigation>

            <QuestionStatement>
              <div className='title'>
                <h1>
                  Questão {questionNumber}
                </h1>
                <ButtonReport>Reportar</ButtonReport>
              </div>

              <div className='questionInfo'>
                {fetching?
                <div className='load'>
                  <p>Carregando...</p>
                </div> : <p>{currentQuestion?.enunciado}</p>}
                <ul>
                  <li><strong>Ano:</strong> {fetching? <SpinnerCircular color="#f0f0fc" size="20" className='spin'/> : <>{currentQuestion?.ano?.ano}</>}</li>
                  <li><strong>Banca:</strong> {fetching? <SpinnerCircular color="#f0f0fc" size="20" className='spin'/> : <>{currentQuestion?.banca?.name}</>}</li>
                  <li><strong>Prova:</strong> {fetching? <SpinnerCircular color="#f0f0fc" size="20" className='spin'/> : <>{currentQuestion?.processoSeletivo?.name}</>}</li>
                </ul>
              </div>

              <ul className='questionAlternatives'>
                {
                  currentQuestion?.alternatives  &&  currentQuestion?.alternatives.map((alternative) => (
                    <li className={alternativeDeleted.includes(alternative.id) ? "deleted" : ""} key={alternative.id}>
                      <button onClick={() => setIsSelected(alternative.id)} className={`${isSelected == alternative.id && 'selected' } ${isCorrect == alternative.id ? 'certo' : `${isSelected === alternative.id && isCorrect && 'errado' }`}`} disabled={alternativeDeleted.includes(alternative.id) || Boolean(isCorrect) || !counter.isRunning}>{alternative.letter}</button>
                      <p>{fetching ? 'Carregando...': alternative.text}</p>
                      <button className='delete' onClick={() => handleAlternativeDeleted(alternative.id)}><AiOutlineDelete /></button>
                    </li>
                  )
                  )}
              </ul>

            </QuestionStatement>
          <QuestionButtons>
            <div className='resposta'>
              <button onClick={answerQuestion} disabled={fetching || !counter.isRunning}>{!isCorrect ? 'Responder' : 'Próximo'}</button>
            </div>
          </QuestionButtons>

        </QuestionContainer>
     </Content>
    </Layout>
  )
}
