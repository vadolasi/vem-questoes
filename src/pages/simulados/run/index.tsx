import { useState, useEffect } from 'react';
import Image from 'next/image';

import { AiOutlineRight, AiOutlineDelete, AiOutlineCompass, AiOutlineComment, AiOutlineBook, AiOutlineProfile} from 'react-icons/ai'

import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons, Search  } from './styles';

import { Container, Content} from '../styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Timer } from '@/components/Timer';
import { PaginationBar } from '@/components/PaginationBar';


export default function Questoes() {
  const [questions, setQuestions] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState(1);

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

  function selectedA(){
    setSelectA(true);
    setSelectB(false);
    setSelectC(false);
    setSelectD(false);
  }
  function selectedB(){
    setSelectA(false);
    setSelectB(true);
    setSelectC(false);
    setSelectD(false);
  }
  function selectedC(){
    setSelectA(false);
    setSelectB(false);
    setSelectC(true);
    setSelectD(false);
  }
  function selectedD(){
    setSelectA(false);
    setSelectB(false);
    setSelectC(false);
    setSelectD(true);
  }
  

  function showExplicationBox(){
    setExplicationBox(!explicationBox);
    setCommentBox(false);
    setNotebookBox(false);
    setXrayBox(false);
  }
  function showCommentBox(){
    setExplicationBox(false);
    setCommentBox(!commentBox);
    setNotebookBox(false);
    setXrayBox(false);
  }
  function showNotebookBox(){
    setExplicationBox(false);
    setCommentBox(false);
    setNotebookBox(!notebookBox);
    setXrayBox(false);
  }
  function showXrayBox(){
    setExplicationBox(false);
    setCommentBox(false);
    setNotebookBox(false);
    setXrayBox(!xrayBox);
  }


  return (
    <Container>
     <Header/>
     <Menu page=''/>
     <Content>
        <Timer title='Simulado de Respiração'/>
        <QuestionContainer>
          <Navigation>
            <span>{questions.length} questões encontradas</span>

            <PaginationBar pages={questions}/>

            <GoTo>
              <input type='number'min={questions[0]} max={questions.length} value={pageInput} onChange={(e: any) => {setPageInput(e.target.value), console.log(e.target.value)}}/>
              <span>Ir Para</span>
              <button onClick={() => {setPage(pageInput), console.log(page)}}><AiOutlineRight/></button>
            </GoTo>

          </Navigation>

          <QuestionStatement>
            <div className='title'>
              <h1>
                Questão {page}
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
                  <button className='delete' onClick={() => setDeleteA(!deleteA)}><AiOutlineDelete/></button>
                </li>

                <li className={deleteB ? "deleted" : ""}>
                  <button onClick={selectedB} className={!deleteB && selectB ? "selected" : ""} disabled={deleteB}> B</button>
                  <p>Os profissionais podem se vincular em mais de uma equipe e ter carga horária de 10, 20 ou 30 horas semanais</p>
                  <button className='delete' onClick={() => setDeleteB(!deleteB)}><AiOutlineDelete/></button>
                </li>

                <li className={deleteC ? "deleted" : ""}>
                  <button onClick={selectedC} className={!deleteC && selectC ? "selected" : ""} disabled={deleteC}>C</button>
                  <p>O tempo destinado à educação permanente foi garantido com o mínimo de 8h</p>
                  <button className='delete' onClick={() => setDeleteC(!deleteC)}><AiOutlineDelete/></button>
                </li>

                <li className={deleteD ? "deleted" : ""}>
                  <button onClick={selectedD} className={!deleteD && selectD ? "selected" : ""} disabled={deleteD}>D</button>
                  <p>Sem a definição clara de número de Agentes Comunitários de Saúde (ACS) por equipe, as equipes podem funcionar tendo apenas um ACS</p>
                  <button className='delete' onClick={() => setDeleteD(!deleteD)}><AiOutlineDelete/></button>
                </li>
            </ul>


          </QuestionStatement>

          <QuestionButtons>
            <div className='resposta'>
              <button>Responder</button>
            </div>
          </QuestionButtons>

        </QuestionContainer>
     </Content>
    </Container>
  )
}

