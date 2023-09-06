import { Content } from '../../components/styles/estatisticas';

import {useState} from 'react'



import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { graphql } from '@/gql';
import { useQuery } from 'urql';

import { Chart } from "react-google-charts";

import Layout from '@/components/layout';

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
  query Chart {
    relatorio {
      date
      total
      totalCorrect
    }
    me {
      totalQuestions
      totalCorrect
    }
  }
`);

export default function Table() {
const [result] = useQuery({ query: chartQuery, requestPolicy: "cache-and-network" })
const [optionsBar, setOptionsBar] = useState({
    title: 'Questões',
    hAxis: { title: "Data", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  });

  const { data } = result

  const erros = data?.me?.totalQuestions! - data?.me?.totalCorrect! || 0
  const percentage = 100 * data?.me?.totalCorrect! / data?.me?.totalQuestions! || 0

  return (
    <Layout page="estatisticas">
      <Content>
           <h1 className='text-3xl font-bold'>Analise Geral</h1>
           <div className='flex flex-col items-center justify-between w-full h-full gap-5 xl:flex-row'>
           <div className='w-3/5 circularGraph'>
            <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} className='circle'/>
            <span><strong>{data?.me?.totalQuestions}</strong> Questões Resolvidas</span>
            <span><strong>{data?.me?.totalCorrect}</strong> Acertos</span>
            <span><strong>{erros}</strong> Erros</span>

     <Chart
     chartType="AreaChart"
     width="100%"
     height="400px"
     data={[['Data', 'Total', 'Certas'], ...(data?.relatorio.map((dia => [dia.date, dia.total, dia.totalCorrect])) || ["01/01/2023", 0, 0])]}
     options={optionsBar}
   />
           </div>
           <div className='w-[250px] border border-secondary rounded-md p-5 glex flex-col xl:w-[400px]'>
            <h1 className='text-2xl font-bold'>Rendimento por matéria</h1>
              <div>
              <ProgressBar title='Respiração' totalQuestoes={10} questoesAcertadas={4}/>
              <ProgressBar title='Trauma' totalQuestoes={10} questoesAcertadas={6}/>
              <ProgressBar title='Neurofuncional' totalQuestoes={10} questoesAcertadas={2}/>
              <ProgressBar title='Esporte' totalQuestoes={10} questoesAcertadas={1}/>
              <ProgressBar title='Cardiovascular' totalQuestoes={10} questoesAcertadas={8}/>
              </div>
           </div>
           </div>
          </Content>
    </Layout>
  )
}
