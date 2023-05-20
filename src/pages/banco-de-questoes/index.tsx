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

import professor from '@/assets/professor.png';
import typing from '@/assets/typing.png';
import notebook from '@/assets/Notebook.png';
import raiox from '@/assets/raiox.png';
import { graphql } from '@/gql';
import { useQuery } from 'urql';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

import { AiOutlineFilter, AiOutlineUndo } from 'react-icons/ai';

import { ContainerFilter, Fieldset, ButtonFilter, CorrectAnswerContainer, ContainerPagination, ButtonPagination, MenuPagination } from './styles';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';

import { SpinnerCircular } from 'spinners-react';

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

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetQuestions($page: Float, $itemsPerPage: Float) {
    questions(
      page: $page,
      itemsPerPage: $itemsPerPage
    ) {
      questions {
        id,
        enunciado,
        processoSeletivo {
          name
        },
        ano {
          ano
        },
        local {
          name
        },
        perfil {
          name
        },
        area {
          name
        },
        subarea {
          name
        },
        estado {
          name
        },
        banca {
          name
        },
        alternatives {
          id,
          text,
          letter,
          correct,
        },
        comments {
          id,
          content,
        },
      }
      pagesQuantity,
      quantity,
    }
  }
`)

export default function Questoes() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [questionInput, setQuestionInput] = useState(1)
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const { width, height } = useWindowDimensions();

  const [resultFilter] = useQuery({
    query: questionsFiltersQuery
  })
  const { data: filterData } = resultFilter

  const [resultQuestion] = useQuery({
    query: getQuestionQuery, variables: {
      page: questionNumber, itemsPerPage: 1
    }
  })
  const { data, fetching } = resultQuestion

  const [deleteA, setDeleteA] = useState(false);
  const [deleteB, setDeleteB] = useState(false);
  const [deleteC, setDeleteC] = useState(false);
  const [deleteD, setDeleteD] = useState(false);

  const [selectA, setSelectA] = useState(false);
  const [selectB, setSelectB] = useState(false);
  const [selectC, setSelectC] = useState(false);
  const [selectD, setSelectD] = useState(false);

  const [explicationBox, setExplicationBox] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const [notebookBox, setNotebookBox] = useState(false);
  const [xrayBox, setXrayBox] = useState(false);

  const currentQuestion = data?.questions.questions[0];
  const pages = data?.questions.questions?.map((_, index) => index + 1) || []

  function selectedA() {
    setSelectA(true);
    setSelectB(false);
    setSelectC(false);
    setSelectD(false);
  }
  function selectedB() {
    setSelectA(false);
    setSelectB(true);
    setSelectC(false);
    setSelectD(false);
  }
  function selectedC() {
    setSelectA(false);
    setSelectB(false);
    setSelectC(true);
    setSelectD(false);
  }
  function selectedD() {
    setSelectA(false);
    setSelectB(false);
    setSelectC(false);
    setSelectD(true);
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
              <SearchInput placeholder='Pesquisar' />
              <div className='inputs'>
                <div className='Selects'>
                  <Select label='Processo seletivo' options={filterData?.processosSeletivos.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Ano' options={filterData?.anos.map(({ id, ano }) => ({ value: id, option: ano.toString() })) || []} />
                  <Select label='Local' options={filterData?.locais.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Perfil' options={filterData?.perfis.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Area' options={filterData?.areas.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Subarea' options={filterData?.subareas.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Estado' options={filterData?.estados.map(({ id, name }) => ({ value: id, option: name })) || []} />
                  <Select label='Banca' options={filterData?.bancas.map(({ id, name }) => ({ value: id, option: name })) || []} />
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
                <ButtonFilter className='filter'>
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
                <input type='number' min={1} defaultValue={questionInput} onChange={(e: any) => setQuestionInput(Number(e.target.value))} />
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
                  currentQuestion?.alternatives &&  (
                    <>
                      <li className={deleteA ? "deleted" : ""}>
                        <button onClick={selectedA} className={!deleteA && selectA ? "selected" : ""} disabled={deleteA}>A</button>
                        <p>{fetching ? 'Carregando...': currentQuestion?.alternatives[0].text}</p>
                        <button className='delete' onClick={() => setDeleteA(!deleteA)}><AiOutlineDelete /></button>
                      </li>
  
                      <li className={deleteB ? "deleted" : ""}>
                        <button onClick={selectedB} className={!deleteB && selectB ? "selected" : ""} disabled={deleteB}> B</button>
                        <p>{fetching ? 'Carregando...': currentQuestion?.alternatives[1].text}</p>
                        <button className='delete' onClick={() => setDeleteB(!deleteB)}><AiOutlineDelete /></button>
                      </li>
  
                      <li className={deleteC ? "deleted" : ""}>
                        <button onClick={selectedC} className={!deleteC && selectC ? "selected" : ""} disabled={deleteC}>C</button>
                        <p>{fetching ? 'Carregando...': currentQuestion?.alternatives[2].text}.</p>
                        <button className='delete' onClick={() => setDeleteC(!deleteC)}><AiOutlineDelete /></button>
                      </li>
  
                      <li className={deleteD ? "deleted" : ""}>
                        <button onClick={selectedD} className={!deleteD && selectD ? "selected" : ""} disabled={deleteD}>D</button>
                        <p>{fetching ? 'Carregando...': currentQuestion?.alternatives[3].text}.</p>
                        <button className='delete' onClick={() => setDeleteD(!deleteD)}><AiOutlineDelete /></button>
                      </li>
                    </>
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
              >
                <CommentBar />
              </DefaultBoxQuestion>


              <DefaultBoxQuestion className={notebookBox ? 'show' : "hidden"}>
                <Search>
                  <SearchInput />
                  <Button>+ Criar Caderno</Button>
                </Search>
                <DefaultSearchPage text='Crie um caderno para você!' picture={notebook} alt='Mulher escreven informações em um carderno' />
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
                <button onClick={() => setIsConfettiActive(true)} disabled={fetching}>Responder</button>
              </div>

              <ul className='actionsButton'>
                <li>
                  <button onClick={showExplicationBox} className={explicationBox ? 'open' : ""}>
                    <AiOutlineCompass />
                    <span>Explicação</span>
                  </button>
                </li>
                <li>
                  <button onClick={showCommentBox} className={commentBox ? 'open' : ""}>
                    <AiOutlineComment />
                    <span>Comentários</span>
                  </button>
                </li>
                <li>
                  <button onClick={showNotebookBox} className={notebookBox ? 'open' : ""}>
                    <AiOutlineBook />
                    <span>Cadernos</span>
                  </button>
                </li>
                <li>
                  <button onClick={showXrayBox} className={xrayBox ? 'open' : ""}>
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

