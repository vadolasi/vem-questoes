import { useState } from 'react';

import { AiOutlineRight, AiOutlineDelete, AiOutlineCompass, AiOutlineComment, AiOutlineBook, AiOutlineProfile} from 'react-icons/ai'

import { GoTo, Navigation, QuestionContainer, QuestionStatement, ButtonReport, QuestionButtons } from './styles';

import { Container, Content } from '../styles';

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Filter } from '@/components/Filter';
import { PaginationBar } from '@/components/PaginationBar';


export default function Questoes() {
  const [questions, setQuestions] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [deleteA, setDeleteA] = useState(false);
  const [deleteB, setDeleteB] = useState(false);
  const [deleteC, setDeleteC] = useState(false);
  const [deleteD, setDeleteD] = useState(false);

  const [selectA, setSelectA] = useState(false);
  const [selectB, setSelectB] = useState(false);
  const [selectC, setSelectC] = useState(false);
  const [selectD, setSelectD] = useState(false);

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
  
  return (
    <Container>
     <Header/>
     <Menu/>
     <Content>
        <Filter/>
        <QuestionContainer>
          <Navigation>
            <span>{questions.length} questões encontradas</span>

            <PaginationBar pages={questions}/>

            <GoTo>
              <input type='number'min={questions[0]} max={questions.length}/>
              <span>Ir Para</span>
              <button><AiOutlineRight/></button>
            </GoTo>

          </Navigation>

          <QuestionStatement>
            <div className='title'>
              <h1>
                Questão 1
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

            <ul className='actionsButton'>
              <li>
                <button>
                  <AiOutlineCompass/>
                  <span>Explicação</span>
                </button>
              </li>
              <li>
                <button>
                  <AiOutlineComment/>
                  <span>Comentários</span>
                </button>
              </li>
              <li>
                <button>
                  <AiOutlineBook/>
                  <span>Cadernos</span>
                </button>
              </li>
              <li>
                <button>
                  <AiOutlineProfile/>
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

