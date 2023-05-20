import { useState, useEffect } from 'react';

import { AiOutlineRight, AiOutlineDelete, AiOutlineCompass, AiOutlineComment, AiOutlineBook, AiOutlineProfile } from 'react-icons/ai'

import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons, Search, Container, Content } from '../../components/styles/banco-de-questoes';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { PaginationBar } from '@/components/PaginationBar';
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

import { AiOutlineFilter, AiOutlineUndo } from 'react-icons/ai';

import { ContainerFilter, Fieldset, ButtonFilter } from './styles';
import { toast } from 'react-toastify';

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


const questionQuantityQuery = graphql(/* GraphQL */ `
  query GetQuestions {
    questions {
      pagesQuantity
      quantity
    }
  }
`)

export default function Questoes() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [questionInput, setQuestionInput] = useState(1)

  const [resultFilter] = useQuery({ query: questionsFiltersQuery })
  const { data: filterData } = resultFilter

  const [resultQuestionsQuantity] = useQuery({ query: questionQuantityQuery })

  const { data: questionQuantity } = resultQuestionsQuantity

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
    if (questionQuantity?.questions.quantity) {
      if (questionInput >= 1 && questionInput <= questionQuantity?.questions.quantity) {
        setQuestionNumber(questionInput)
      } else {
        setQuestionNumber(1)
        toast.error('Coloque um valor válido')
      }
    }
  }

  return (
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
            <span>{questionQuantity?.questions.quantity || 0} questões encontradas</span>

            {/* <PaginationBar pages={data?.questions.questions?.map((_, index) => index + 1) || []} /> */}

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
              <p>A Atenção Primária à Saúde (APS) no Brasil passou por mudanças importantes com a revisão da Política Nacional de Atenção Básica, por meio da Portaria nº 2.436, de 21 de setembro de 2017. Considerando as alterações relacionadas à dimensão organizativa e funcional e de gestão, a alternativa que aponta mudanças trazidas pela política é:</p>
              <ul>
                <li><strong>Ano:</strong> 2021</li>
                <li><strong>Banca:</strong> UNISEU</li>
                <li><strong>Prova:</strong> Residência para Fisioterapeutas</li>
              </ul>
            </div>

            <ul className='questionAlternatives'>

              <li className={deleteA ? "deleted" : ""}>
                <button onClick={selectedA} className={!deleteA && selectA ? "selected" : ""} disabled={deleteA}>A</button>
                <p>O modelo de Estratégia Saúde da Família se torna prioritário e exclusivo</p>
                <button className='delete' onClick={() => setDeleteA(!deleteA)}><AiOutlineDelete /></button>
              </li>

              <li className={deleteB ? "deleted" : ""}>
                <button onClick={selectedB} className={!deleteB && selectB ? "selected" : ""} disabled={deleteB}> B</button>
                <p>Os profissionais podem se vincular em mais de uma equipe e ter carga horária de 10, 20 ou 30 horas semanais</p>
                <button className='delete' onClick={() => setDeleteB(!deleteB)}><AiOutlineDelete /></button>
              </li>

              <li className={deleteC ? "deleted" : ""}>
                <button onClick={selectedC} className={!deleteC && selectC ? "selected" : ""} disabled={deleteC}>C</button>
                <p>O tempo destinado à educação permanente foi garantido com o mínimo de 8h</p>
                <button className='delete' onClick={() => setDeleteC(!deleteC)}><AiOutlineDelete /></button>
              </li>

              <li className={deleteD ? "deleted" : ""}>
                <button onClick={selectedD} className={!deleteD && selectD ? "selected" : ""} disabled={deleteD}>D</button>
                <p>Sem a definição clara de número de Agentes Comunitários de Saúde (ACS) por equipe, as equipes podem funcionar tendo apenas um ACS</p>
                <button className='delete' onClick={() => setDeleteD(!deleteD)}><AiOutlineDelete /></button>
              </li>
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
              <button>Responder</button>
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
    </Container>
  )
}

