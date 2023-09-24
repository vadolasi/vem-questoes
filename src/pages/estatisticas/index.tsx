import { Content } from '../../components/styles/estatisticas';
import { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { graphql } from '@/gql';
import { useQuery } from 'urql';
import { Chart } from "react-google-charts";
import Layout from '@/components/layout';
import { Select } from '@/components/Select';

interface ProgressBarProps {
  title: string;
  totalQuestoes: number;
  questoesAcertadas: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, totalQuestoes, questoesAcertadas }) => {
  const porcentagemAcertos = (questoesAcertadas / totalQuestoes) * 100;

  return (
    <div>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <div className='w-full bg-blue-gray-300'>
        <div className='pl-1 font-semibold text-white rounded-r-full bg-primary text-md' style={{ width: `${porcentagemAcertos}%` }}>
          {porcentagemAcertos.toFixed(0)}%
        </div>
      </div>
      <p>
        Questões corretas: {questoesAcertadas} de {totalQuestoes}
      </p>
    </div>
  );
};

const chartQuery = graphql(/* GraphQL */ `
  query Chart($lte: LTE!) {
    relatorio(lte: $lte) {
      questions {
        date
        total
        totalCorrect
      }
      materias {
        nome
        total
        correto
      }
      total
      correto
    }
  }
`);

export default function Table() {
const [lte, setLte] = useState("dia")
const [result] = useQuery({ query: chartQuery, requestPolicy: "cache-and-network", variables: { lte: lte as any } })
const [optionsBar, setOptionsBar] = useState({
    title: 'Questões',
    hAxis: { title: "Data", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" }
  });

  const { data, fetching } = result

  const erros = data?.relatorio?.total! - data?.relatorio?.correto! || 0
  const percentage = 100 * data?.relatorio?.correto! / data?.relatorio?.total! || 0

  return (
    <Layout page="estatisticas">
      <Content>
           <h1 className='text-3xl font-bold'>Analise Geral {lte}</h1>
           <Select label='Selecione o periodo' value={lte} blank={false} options={[{ option: "Hoje", value: "dia" }, { option: "Semana", value: "semana" }, { option: "Mês", value: "mes" }, { option: "Trimestre", value: "trimestre" }, { option: "Ano", value: "ano" }]} onChange={e => setLte(e.target.value)}/>
           <div className='flex flex-col items-center justify-between w-full h-full gap-5 xl:flex-row'>
           <div className='w-3/5 circularGraph'>
            <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} className='circle'/>
            <span><strong>{data?.relatorio?.total}</strong> Questões Resolvidas</span>
            <span><strong>{data?.relatorio?.correto}</strong> Acertos</span>
            <span><strong>{erros}</strong> Erros</span>

    {!fetching && (data?.relatorio.questions.map((dia => [dia.date, dia.total, dia.totalCorrect])) || []).length > 0 && (
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={[['Data', 'Total', 'Certas'], ...(data?.relatorio.questions.map((dia => [dia.date, dia.total, dia.totalCorrect])) || ["01/01/2023", 0, 0])]}
        options={optionsBar}
      />
    )}
           </div>
           <div className='w-[250px] border border-secondary rounded-md p-5 glex flex-col xl:w-[400px]'>
            <h1 className='text-2xl font-bold'>Rendimento por matéria</h1>
              <div>
              {data?.relatorio.materias.map(materia => (
                <ProgressBar title={materia.nome} totalQuestoes={materia.total} questoesAcertadas={materia.correto}/>
              ))}
              </div>
           </div>
           </div>
          </Content>
    </Layout>
  )
}
