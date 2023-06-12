import { useState, useEffect } from 'react';

import { AiOutlineRight, AiOutlineLeft, AiOutlineDelete, AiOutlineCompass, AiOutlineComment, AiOutlineBook, AiOutlineProfile } from 'react-icons/ai'
import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons, Search, Container, Content } from '../../components/styles/banco-de-questoes';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { DefaultBoxQuestion } from '@/components/DefaultBoxQuestion';
import { ReportBox } from '@/components/ReportBox';
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

import RSelect from 'react-select'

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
  query Me2 {
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

const addQuestionToNotebookMutation = graphql(/* GraphQL */`
  mutation AddQuestionToNotebook($id: String!, $questionId: String!) {
    addQuestionToNotebook(
      id: $id
      questionId: $questionId
    ) {
      id
    }
  }
`)

const removeQuestionFromNotebookMutation = graphql(/* GraphQL */`
  mutation RemoveQuestionFromNotebook($id: String!, $questionId: String!) {
    removeQuestionFromNotebook(
      id: $id
      questionId: $questionId
    ) {
      id
    }
  }
`)

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetQuestions(
    $page: Float
    $itemsPerPage: Float
    $text: String
    $processoSeletivoIds: [String!]
    $anoIds: [String!]
    $localIds: [String!]
    $perilIds: [String!]
    $areaIds: [String!]
    $subareaIds: [String!]
    $estadoIds: [String!]
    $bancaIds: [String!]
    $apenasRespondidas: Boolean
    $apenasNaoRespondidas: Boolean
    $apenasRespondidasCertas: Boolean
    $apenasRespondidasErradas: Boolean
  ) {
    questions(
      page: $page,
      itemsPerPage: $itemsPerPage
      text: $text
      processoSeletivoIds: $processoSeletivoIds
      anoIds: $anoIds
      localIds: $localIds
      perfilIds: $perilIds
      areaIds: $areaIds
      subareaIds: $subareaIds
      estadoIds: $estadoIds
      bancaIds: $bancaIds
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
  const [{ fetching: loadingReponse }, resolveQuestion] = useMutation(resolverQuestionMutation)
  const [text, setText] = useState<string | undefined>(undefined)
  const [filterProcessoSeletivo, setFilterProcessoSeletivo] = useState<string[]>([])
  const [filterAno, setFilterAno] = useState<string[]>([])
  const [filterLocal, setFilterLocal] = useState<string[]>([])
  const [filterPerfil, setFilterPerfil] = useState<string[]>([])
  const [filterArea, setFilterArea] = useState<string[]>([])
  const [filterSubarea, setFilterSubarea] = useState<string[]>([])
  const [filterEstado, setFilterEstado] = useState<string[]>([])
  const [filterBanca, setFilterBanca] = useState<string[]>([])
  const [showReportBox, setShowReportBox] = useState(false)

  const [, executeAddQuestionToNotebook] = useMutation(addQuestionToNotebookMutation)
  const [, executeRemoveQuestionFromNotebook] = useMutation(removeQuestionFromNotebookMutation)

  const { width, height } = useWindowDimensions();

  const [resultFilter] = useQuery({
    query: questionsFiltersQuery
  })
  const { data: filterData } = resultFilter

  const [filter, setFilter] = useState({
    itemsPerPage: 1,
    text,
    processoSeletivoIds: filterProcessoSeletivo,
    anoIds: filterAno,
    localIds: filterLocal,
    perilIds: filterPerfil,
    areaIds: filterArea,
    subareaIds: filterSubarea,
    estadoIds: filterEstado,
    bancaIds: filterBanca
  })

  const updateFilter = () => {
    setFilter({
      itemsPerPage: 1,
      text,
      processoSeletivoIds: filterProcessoSeletivo,
      anoIds: filterAno,
      localIds: filterLocal,
      perilIds: filterPerfil,
      areaIds: filterArea,
      subareaIds: filterSubarea,
      estadoIds: filterEstado,
      bancaIds: filterBanca
    })
  }

  const clearFilter = () => {
    setFilter({
      itemsPerPage: 1,
      text: undefined,
      processoSeletivoIds: [],
      anoIds: [],
      localIds: [],
      perilIds: [],
      areaIds: [],
      subareaIds: [],
      estadoIds: [],
      bancaIds: []
    })
  }

  const [resultQuestion] = useQuery({
    query: getQuestionQuery,
    variables: {
      ...filter,
      page: questionNumber
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
                  <RSelect placeholder="Processos seletivos" isMulti options={filterData?.processosSeletivos.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterProcessoSeletivo([...options.map(option => option.value)])} />
                  <RSelect placeholder="Anos" isMulti options={filterData?.anos.map(({ id, ano }) => ({ value: id, label: ano.toString() })) || []} onChange={options => setFilterAno([...options.map(option => option.value)])} />
                  <RSelect placeholder="Locais" isMulti options={filterData?.locais.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterLocal([...options.map(option => option.value)])} />
                  <RSelect placeholder="Perfis" isMulti options={filterData?.perfis.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterPerfil([...options.map(option => option.value)])} />
                  <RSelect placeholder="Areas" isMulti options={filterData?.areas.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterArea([...options.map(option => option.value)])} />
                  <RSelect placeholder="Subareas" isMulti options={filterData?.subareas.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterSubarea([...options.map(option => option.value)])} />
                  <RSelect placeholder="Estados" isMulti options={filterData?.estados.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterEstado([...options.map(option => option.value)])} />
                  <RSelect placeholder="Bancas" isMulti options={filterData?.bancas.map(({ id, name }) => ({ value: id, label: name })) || []} onChange={options => setFilterBanca([...options.map(option => option.value)])} />
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
                <ButtonFilter className='filter' onClick={updateFilter}>
                  <AiOutlineFilter />
                  Salvar Filtro
                </ButtonFilter>
                <ButtonFilter className='reset' onClick={clearFilter}>
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
                <ButtonReport onClick={() => setShowReportBox(!showReportBox)}>Reportar</ButtonReport>
                <ReportBox show={showReportBox} question={currentQuestion}/>
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

              {explicationBox && (
                <DefaultBoxQuestion
                  h1='Essa questão ainda não possui gabarito comentando'
                  strong='Estamos trabalhando nisso!'
                  picture={professor}
                  alt='Professor dando aula'
                />
              )}

              {commentBox && (
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
              )}

              {notebookBox && (
                <>
                <DefaultBoxQuestion content={true} comment={false}>
                  <Search>
                    <SearchInput onChange={() => {}} />
                    <Button onClick={addNotebook}>+ Criar Caderno</Button>
                  </Search>
                  <DefaultSearchPage text='Crie um caderno para você!' picture={notebook} alt='Mulher escreven informações em um carderno' content={notebookData?.notebooks && notebookData?.notebooks.length > 0}>
                  {notebookData?.notebooks && notebookData.notebooks.map(({ id, name, questions, description }) => (
                    <NotebookCard
                      id={id}
                      key={id}
                      title={name}
                      description={description || ""}
                      questions={questions}
                      currentQuestion={currentQuestion?.id}
                      addFunction={() => executeAddQuestionToNotebook({ id, questionId: currentQuestion?.id! })}
                      removeFunction={() => executeRemoveQuestionFromNotebook({ id, questionId: currentQuestion?.id! })}
                      add
                    />
                  ))}
                  </DefaultSearchPage>
                </DefaultBoxQuestion>
                </>
              )}

              {xrayBox && (
                <DefaultBoxQuestion
                  h1='Esta questão ainda não tem Raio-X'
                  strong='Estamos trabalhando nisso!'
                  picture={raiox}
                  alt='mulher com uma maquina de dados'
                />
              )}

            </QuestionStatement>

            <QuestionButtons>
              <div className='resposta'>
                <Button onClick={answerQuestion} loading={loadingReponse}>{!isCorrect ? 'Responder' : 'Próximo'}</Button>
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
