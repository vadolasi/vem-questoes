import { useState, useEffect } from 'react';

import { AiOutlineRight, AiOutlineLeft, AiOutlineDelete, AiOutlineCompass, AiOutlineComment, AiOutlineBook, AiOutlineProfile } from 'react-icons/ai'
import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons, Search, Container, Content } from '../../components/styles/banco-de-questoes';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { DefaultBoxQuestion } from '@/components/DefaultBoxQuestion';
import { CommentBar } from '@/components/CommentBar';
import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { DefaultSearchPage } from '@/components/DefaultSearchPage';
import { Select } from '@/components/Select';
import { Checkbox } from '@/components/Checkbox'
import { NotebookCard } from '@/components/NotebookCard';

import professor from '@/assets/professor.png';
import typing from '@/assets/typing.png';
import notebook from '@/assets/Notebook.png';
import raiox from '@/assets/raiox.png';
import { graphql } from '@/gql';
import { useQuery, useMutation } from 'urql';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

import { AiOutlineFilter, AiOutlineUndo } from 'react-icons/ai';

import { ContainerFilter, Fieldset, ButtonFilter, CorrectAnswerContainer, ContainerPagination, ButtonPagination, MenuPagination } from '../../components/styles';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';

import { SpinnerCircular } from 'spinners-react';
import { CommentCard } from '@/components/commentCard';

const resolverQuestionMutation = graphql(/* GraphQL */ `
  mutation ResolveQuestion($questionId: String!, $alternativeId: String!) {
    addAnswer(
      questionId: $questionId
      alternativeId: $alternativeId
    ) {
      correct
      correctAlternative
    }
  }
`)

const meQuery = graphql(/* GraphQL */ `
  query Me {
    me {
      name
      photoUrl
    }
  }
`);

const questionsFiltersQuery = graphql(/* GraphQL */ `
  query QuestionsFilters {
    processosSeletivos {
      id
      name
    }
    anos {
      id
      ano
    }
    locais {
      id
      name
    }
    perfis {
      id
      name
    }
    areas {
      id
      name
    }
    subareas {
      id
      name
    }
    estados {
      id
      name
    }
    bancas {
      id
      name
    }
  }
`)

const notebooksQuery = graphql(/* GraphQL */ `
  query NotebooksQuery {
    notebooks {
      id
      name
      description
      questions {
        id
      }
    }
  }
`);

const createNotebookMutation = graphql(/* GraphQL */ `
  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {
    addNotebook(
      name: $name
      description: $description
      questions: $questions
    ) {
      id
      name
      description
    }
  }
`);

const deleteNotebookMutation = graphql(/* GraphQL */`
  mutation DeleteNotebook($id: String!) {
    deleteNotebook(id: $id)
  }
`)

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetQuestions(
    $page: Float
    $itemsPerPage: Float
    $text: String
    $processoSeletivoId: String
    $anoId: String
    $localId: String
    $perilId: String
    $areaId: String
    $subareaId: String
    $estadoId: String
    $bancaId: String
    $apenasRespondidas: Boolean
    $apenasNaoRespondidas: Boolean
    $apenasRespondidasCertas: Boolean
    $apenasRespondidasErradas: Boolean
  ) {
    questions(
      page: $page,
      itemsPerPage: $itemsPerPage
      text: $text
      processoSeletivoId: $processoSeletivoId
      anoId: $anoId
      localId: $localId
      perfilId: $perilId
      areaId: $areaId
      subareaId: $subareaId
      estadoId: $estadoId
      bancaId: $bancaId
      apenasRespondidas: $apenasRespondidas
      apenasNaoRespondidas: $apenasNaoRespondidas
      apenasRespondidasCertas: $apenasRespondidasCertas
      apenasRespondidasErradas: $apenasRespondidasErradas
    ) {
      questions {
        id
        enunciado
        processoSeletivo {
          name
        }
        ano {
          ano
        }
        local {
          name
        }
        perfil {
          name
        }
        area {
          name
        }
        subarea {
          name
        }
        estado {
          name
        }
        banca {
          name
        }
        alternatives {
          id
          text
          letter
        }
        comments {
          id
          content
        }
      }
      pagesQuantity
      quantity
    }
  }
`)

export default function Questoes() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [questionInput, setQuestionInput] = useState(1)
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [, resolveQuestion] = useMutation(resolverQuestionMutation)
  const [text, setText] = useState<string | undefined>(undefined)
  const [filterProcessoSeletivo, setFilterProcessoSeletivo] = useState<string | undefined>(undefined)
  const [filterAno, setFilterAno] = useState<string | undefined>(undefined)
  const [filterLocal, setFilterLocal] = useState<string | undefined>(undefined)
  const [filterPerfil, setFilterPerfil] = useState<string | undefined>(undefined)
  const [filterArea, setFilterArea] = useState<string | undefined>(undefined)
  const [filterSubarea, setFilterSubarea] = useState<string | undefined>(undefined)
  const [filterEstado, setFilterEstado] = useState<string | undefined>(undefined)
  const [filterBanca, setFilterBanca] = useState<string | undefined>(undefined)

  const { width, height } = useWindowDimensions();

  const [resultFilter] = useQuery({
    query: questionsFiltersQuery
  })
  const { data: filterData } = resultFilter

  const [resultQuestion, getQuestions] = useQuery({
    query: getQuestionQuery,
    variables: {
      page: questionNumber,
      itemsPerPage: 1,
      text,
      processoSeletivoId: filterProcessoSeletivo,
      anoId: filterAno,
      localId: filterLocal,
      perilId: filterPerfil,
      areaId: filterArea,
      subareaId: filterSubarea,
      estadoId: filterEstado,
      bancaId: filterBanca
    }
  })

  const { data, fetching } = resultQuestion

  const [resultNotebook, executeQuery] = useQuery({ query: notebooksQuery })
  const { data: notebookData } = resultNotebook
  const [, executeCreateNotebook] = useMutation(createNotebookMutation)
  const [, executeDeleteNotebook] = useMutation(deleteNotebookMutation)

  const [result] = useQuery({ query: meQuery })

  const { data: meData } = result

  const [alternativeDeleted, setAlternativeDeleted] = useState<string[]>([]);

  const [isSelected, setIsSelected] = useState<string | null>(null);

  const [isCorrect, setIsCorrect] = useState<string | null>(null);

  const [explicationBox, setExplicationBox] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const [notebookBox, setNotebookBox] = useState(false);
  const [xrayBox, setXrayBox] = useState(false);

  const currentQuestion = data?.questions.questions[0];
  const pages = data?.questions.questions?.map((_, index) => index + 1) || [];

  function handleAlternativeDeleted(alternativeID: string){
    const alredyDeleted = alternativeDeleted.includes(alternativeID)

    if (alredyDeleted) {
      const filteredDeleted = alternativeDeleted.filter(alternative => alternative !== alternativeID)
      setAlternativeDeleted(filteredDeleted)
    } else {
      setAlternativeDeleted(prevState => [...prevState, alternativeID]);
    }
  }

  function showExplicationBox() {
    setExplicationBox(!explicationBox);
    setCommentBox(false);
    setNotebookBox(false);
    setXrayBox(false);
  }

  function showCommentBox() {
    setExplicationBox(false);
    setCommentBox(!commentBox);
    setNotebookBox(false);
    setXrayBox(false);
  }

  function showNotebookBox() {
    setExplicationBox(false);
    setCommentBox(false);
    setNotebookBox(!notebookBox);
    setXrayBox(false);
  }

  function showXrayBox() {
    setExplicationBox(false);
    setCommentBox(false);
    setNotebookBox(false);
    setXrayBox(!xrayBox);
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
      const result = await resolveQuestion({ questionId: currentQuestion.id, alternativeId: isSelected })
      setIsCorrect(result.data?.addAnswer.correctAlternative || null)
      if (result.data?.addAnswer.correct) {
        setIsConfettiActive(true)
      }
    }
  }

  function handleChangeQuestionByInput() {
    if (data?.questions.quantity) {
      if (questionInput >= 1 && questionInput <= data?.questions.quantity) {
        setQuestionNumber(questionInput)
      } else {
        setQuestionNumber(1)
        toast.error('Coloque um valor válido')
      }
    }
  }

  const addNotebook = async () => {
    await executeCreateNotebook({ name: "Título", questions: [] })
    executeQuery({ requestPolicy: "network-only" })
  }

  const deleteNotebook = async (id: string) => {
    await executeDeleteNotebook({ id })
    executeQuery({ requestPolicy: "network-only" })
  }

  useEffect(() => {
    setQuestionInput(questionNumber)
    setIsCorrect(null)
    setIsSelected(null)
  }, [questionNumber])

  return (
    <>
      <CorrectAnswerContainer>
        {isConfettiActive && height && width && (
          <Confetti
            recycle={false}
            onConfettiComplete={() => setIsConfettiActive(false)}
            width={width}
            height={height}
            colors={['#f44336', '#FF3600', '#FF5722', '#9c27b0', '#990099', '#3f51b5', '#2196f3', '#00CFFF', '#03a9f4', '#00bcd4', '#82E7FF']}
          />
        )}
      </CorrectAnswerContainer>
      <Container>

        <Header />
        <Menu page='banco-de-questoes' />
        <Content>
          <QuestionContainer>
            <ContainerFilter>
              <SearchInput placeholder='Pesquisar' onChange={text => setText(text)} />
              <div className='inputs'>
                <div className='Selects'>
                  <Select label='Processo seletivo' options={filterData?.processosSeletivos.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterProcessoSeletivo(ev.target.value || undefined)} />
                  <Select label='Ano' options={filterData?.anos.map(({ id, ano }) => ({ value: id, option: ano.toString() })) || []} onChange={ev => setFilterAno(ev.target.value|| undefined)} />
                  <Select label='Local' options={filterData?.locais.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterLocal(ev.target.value || undefined)} />
                  <Select label='Perfil' options={filterData?.perfis.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterPerfil(ev.target.value || undefined)} />
                  <Select label='Area' options={filterData?.areas.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterArea(ev.target.value || undefined)} />
                  <Select label='Subarea' options={filterData?.subareas.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterSubarea(ev.target.value || undefined)} />
                  <Select label='Estado' options={filterData?.estados.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterEstado(ev.target.value || undefined)} />
                  <Select label='Banca' options={filterData?.bancas.map(({ id, name }) => ({ value: id, option: name })) || []} onChange={ev => setFilterBanca(ev.target.value || undefined)} />
                </div>

                <Fieldset>
                  <legend>Ocultar Questões</legend>
                  <Checkbox label='Dos cadernos de erros' />
                  <Checkbox label='Dos meus simulados' />
                  <Checkbox label='Anuladas' />
                  <Checkbox label='Desatualizadas' />
                </Fieldset>
              </div>

              <div className='buttons'>
                <ButtonFilter className='filter' onClick={() => getQuestions()}>
                  <AiOutlineFilter />
                  Salvar Filtro
                </ButtonFilter>
                <ButtonFilter className='reset'>
                  <AiOutlineUndo />
                  Limpar Filtro
                </ButtonFilter>
              </div>

            </ContainerFilter>

            <Navigation>
              <span>{data?.questions.quantity || 0} questões</span>

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
                      <button onClick={() => setIsSelected(alternative.id)} className={`${isSelected == alternative.id && 'selected' } ${isCorrect == alternative.id ? 'certo' : `${isSelected === alternative.id && isCorrect && 'errado' }`}`} disabled={alternativeDeleted.includes(alternative.id) || Boolean(isCorrect)}>{alternative.letter}</button>
                      <p>{fetching ? 'Carregando...': alternative.text}</p>
                      <button className='delete' onClick={() => handleAlternativeDeleted(alternative.id)}><AiOutlineDelete /></button>
                    </li>
                  )
                  )}
              </ul>

              <DefaultBoxQuestion
                className={explicationBox ? 'show' : "hidden"}
                h1='Essa questão ainda não possui gabarito comentando'
                strong='Estamos trabalhando nisso!'
                picture={professor}
                alt='Professor dando aula' />

              <DefaultBoxQuestion
                className={commentBox ? 'show' : "hidden"}
                h1='Essa questão ainda não possui comentários'
                strong='Seja o primeiro(a)!'
                picture={typing}
                alt='Rapaz digitando'
                content={true}
                comment={true}
              >
                <>
                <CommentCard image={meData?.me?.photoUrl} name={meData?.me?.name} hora={'11:00'} data='21/05/2023' comment='OIIIII'/>
                </>
              </DefaultBoxQuestion>


              <DefaultBoxQuestion className={notebookBox ? 'show' : "hidden"}>
                <Search>
                  <SearchInput onChange={() => {}} />
                  <Button onClick={addNotebook}>+ Criar Caderno</Button>
                </Search>
                <DefaultSearchPage text='Crie um caderno para você!' picture={notebook} alt='Mulher escreven informações em um carderno' content={notebookData?.notebooks && notebookData?.notebooks.length > 0}>
                {notebookData?.notebooks && notebookData.notebooks.map((notebook, index) => (
                  <NotebookCard id={notebook.id} key={index} title={notebook.name} description={notebook.description!} questions={notebook.questions} deleteClick={() => deleteNotebook(notebook.id)} add/>
                ))}
                </DefaultSearchPage>
              </DefaultBoxQuestion>

              <DefaultBoxQuestion
                className={xrayBox ? 'show' : "hidden"}
                h1='Esta questão ainda não tem Raio-X'
                strong='Estamos trabalhando nisso!'
                picture={raiox}
                alt='mulher com uma maquina de dados'
              />

            </QuestionStatement>

            <QuestionButtons>
              <div className='resposta'>
                <button onClick={answerQuestion} disabled={fetching}>{!isCorrect ? 'Responder' : 'Próximo'}</button>
              </div>

              <ul className='actionsButton'>
                <li>
                  <button onClick={showExplicationBox} className={explicationBox ? 'open' : ""} disabled={!isCorrect}>
                    <AiOutlineCompass />
                    <span>Explicação</span>
                  </button>
                </li>
                <li>
                  <button onClick={showCommentBox} className={commentBox ? 'open' : ""} disabled={!isCorrect}>
                    <AiOutlineComment />
                    <span>Comentários</span>
                  </button>
                </li>
                <li>
                  <button onClick={showNotebookBox} className={notebookBox ? 'open' : ""} disabled={!isCorrect}>
                    <AiOutlineBook />
                    <span>Cadernos</span>
                  </button>
                </li>
                <li>
                  <button onClick={showXrayBox} className={xrayBox ? 'open' : ""} disabled={!isCorrect}>
                    <AiOutlineProfile />
                    <span>Raio-X</span>
                  </button>
                </li>
              </ul>
            </QuestionButtons>

          </QuestionContainer>
        </Content>
      </Container >
    </>
  )
}

