import { Container, Content } from '../../components/styles/estatisticas';

import {useState} from 'react'


import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { graphql } from '@/gql';
import { useQuery } from 'urql';

import { Chart } from "react-google-charts";

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
    <Container>
     <Header/>
     <Menu page='estatisticas'/>
     <Content>
           <h1>Analise Geral</h1>
           <div className='circularGraph'>
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
     </Content>
    </Container>
  )
}
