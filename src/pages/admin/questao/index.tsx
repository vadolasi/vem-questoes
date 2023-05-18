import { useState } from "react"
import { Container, Page } from "../../../components/styles/questao"
import { Button } from "@/components/Button"

export default function Admin() {
  const [enunciado, setEnunciado] = useState('');

  const [ano, setAno] = useState('');
  const [banca, setBanca] = useState('');
  const [prova, setProva] = useState('');

  const [estado, setEstado] = useState('');
  const [area, setArea] = useState('');
  const [subArea, setSubArea] = useState('');


  const [alternativaA, setAlternativaA] = useState('');
  const [checkA, setCheckA] = useState(false);

  const [alternativaB, setAlternativaB] = useState('');
  const [checkB, setCheckB] = useState(false);

  const [alternativaC, setAlternativaC] = useState('');
  const [checkC, setCheckC] = useState(false);

  const [alternativaD, setAlternativaD] = useState('');
  const [checkD, setCheckD] = useState(false);

  function isCorrectA(){
    setCheckA(!checkA);
    setCheckB(false);
    setCheckC(false);
    setCheckD(false);
  }
  function isCorrectB(){
    setCheckA(false);
    setCheckB(!checkB);
    setCheckC(false);
    setCheckD(false);
  }
  function isCorrectC(){
    setCheckA(false);
    setCheckB(false);
    setCheckC(!checkC);
    setCheckD(false);
  }
  function isCorrectD(){
    setCheckA(false);
    setCheckB(false);
    setCheckC(false);
    setCheckD(!checkD);
  }

  return (
    <Container>
        <Page>
         <header>
          <h1>Cadastrar Questões</h1>
          <p>Preencha o formulário para cadastrar uma questão</p>
         </header>
         <form id="questao">
          <fieldset>
            <div className="fieldset-wrapper">
              <legend>Informações da questão</legend>

              <div className="input-wrapper">
                <label htmlFor="textarea">Enunciado</label>
                <textarea  id="textarea" 
                placeholder="Digite aqui seu enunciado"
                value={enunciado}
                onChange={(e) => setEnunciado(e.target.value)}
                />
              </div>

              <div className="col-3">
                <div className="input-wrapper">
                  <label htmlFor="ano">Ano</label>
                  <input type="number" id="ano" 
                  placeholder="Digite aqui o ano da questão"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="banca">Banca</label>
                  <input type="text" id="banca" 
                  placeholder="Digite aqui a banca da questão"
                  value={banca}
                  onChange={(e) => setBanca(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="processo-seletivo">processo seletivo</label>
                  <input type="text" id="processo-seletivo" 
                  placeholder="Digite aqui o processo seletivo da questão"
                  value={prova}
                  onChange={(e) => setProva(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-3">
                <div className="input-wrapper">
                  <label htmlFor="estado">Estado</label>
                  <input type="text" id="estado" 
                  placeholder="'RN' ou Nacional" 
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="area">Area</label>
                  <input type="text" id="area" 
                  placeholder="Digite a area principal"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="subarea">Sub-Area</label>
                  <input type="text" id="subarea" 
                  placeholder="Digite aqui a suB-area da questão"
                  value={subArea}
                  onChange={(e) => setSubArea(e.target.value)}
                  />
                </div>
              </div>
              <div className="fieldset-wrapper">
                <legend>Alternativas</legend>

                  <div className="wrapper">
                    <div className="checkbox">
                        <input type="checkbox" id="correctA" checked={checkA} onChange={isCorrectA}/>
                        <label htmlFor="correctA">Correta</label>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="alternativaA">Alternativa A</label>
                        <input type="text" 
                        id="alternativaA" 
                        placeholder="Digite aqui a alternativa A"
                        value={alternativaA}
                        onChange={(e) => setAlternativaA(e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="checkbox">
                        <input type="checkbox" id="correctB" checked={checkB} onChange={isCorrectB}/>
                        <label htmlFor="correctB">Correta</label>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="alternativaB">Alternativa B</label>
                        <input type="text" 
                        id="alternativaB" 
                        placeholder="Digite aqui a alternativa B"
                        value={alternativaB}
                        onChange={(e) => setAlternativaB(e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="checkbox">
                        <input type="checkbox" id="correctC" checked={checkC} onChange={isCorrectC}/>
                        <label htmlFor="correctC">Correta</label>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="alternativaC">Alternativa C</label>
                        <input type="text" 
                        id="alternativaC" 
                        placeholder="Digite aqui a alternativa C"
                        value={alternativaC}
                        onChange={(e) => setAlternativaC(e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="checkbox">
                        <input type="checkbox" id="correctD" checked={checkD} onChange={isCorrectD}/>
                        <label htmlFor="correctD">Correta</label>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="alternativaD">Alternativa D</label>
                        <input type="text" id="alternativaD" 
                        placeholder="Digite aqui a alternativa D"
                        value={alternativaD}
                        onChange={(e) => setAlternativaD(e.target.value)}
                        />
                    </div>
                  </div>
                </div>

                <Button text="Cadastrar" />
            </div>
          </fieldset>
         </form>
        </Page>
    </Container>
  )
}
