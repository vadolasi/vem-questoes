import Image from "next/image";
import { AiOutlineRightCircle } from "react-icons/ai";

import { Content, OfferCard } from "../components/styles/index";

import mulherComNotebook from "@/assets/mulherComNotebook.png";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ContentCard } from "@/components/ContentCard";
import { UserCard } from "@/components/UserCard";
import { ExamCard } from "@/components/ExamCard";
import { graphql } from "@/gql";
import { useQuery } from "urql";

import { ImageSlider } from "@/components/ImageSlider";
import { SliderData } from "@/components/ImageSlider/SliderData";

import Layout from "@/components/layout";

import { useRouter } from "next/router";

const initialPagerQuery = graphql(/* GraphQL */ `
  query InitialPage {
    me {
      totalQuestions
      totalCorrect
    }
    leaderBoard {
      id
      name
      totalQuestions
      totalCorrect
    }
    simulados {
      simulados {
        id
        name
        totalQuestions
      }
    }
  }
`);

export default function Home() {
  const [result] = useQuery({
    query: initialPagerQuery,
    requestPolicy: "cache-and-network",
  });

  const router = useRouter();

  const { data, fetching } = result;

  const percentage =
    (100 * data?.me?.totalCorrect!) / data?.me?.totalQuestions! || 0;

  return (
    <Layout page="home">
      <Content>
        <ContentCard title="Leaderboard">
          {fetching ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <>
              {data?.leaderBoard?.map(
                ({ id, name, totalQuestions, totalCorrect }, index) => (
                  <UserCard
                    key={id}
                    position={index + 1}
                    name={name}
                    goals={totalCorrect}
                    questions={totalQuestions}
                  />
                )
              )}
            </>
          )}
        </ContentCard>
        <OfferCard>
          <div className="Header">
            <div>
              <h1>Diagnóstico de Desempenho</h1>
              <p>Saiba exatamente o que você domina!</p>
              <button onClick={() => router.push("/desempenho")}>
                Iniciar agora <AiOutlineRightCircle />
              </button>
            </div>
            <Image src={mulherComNotebook} alt="Mulher segurando um notebook" />
          </div>

          {fetching ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div className="Content">
              <ImageSlider slides={SliderData} />
            </div>
          )}
        </OfferCard>
        <ContentCard title="Estatísticas">
          {fetching ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div className="box">
              <CircularProgressbar
                value={percentage}
                text={`${percentage.toFixed(2)}%`}
                className="circle"
              />
              <span style={{ textAlign: "center", marginTop: "20px" }}>
                <strong>{data?.me?.totalCorrect || 0}</strong> questões certas
                de <strong>{data?.me?.totalQuestions || 0}</strong>
              </span>
            </div>
          )}
        </ContentCard>
        <ContentCard title="Simulados">
          {fetching ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <>
              {data?.simulados.simulados.map((simulado) => (
                <ExamCard
                  key={simulado.id}
                  id={simulado.id}
                  name={simulado.name}
                  questions={simulado.totalQuestions}
                />
              ))}
            </>
          )}
        </ContentCard>
      </Content>
    </Layout>
  );
}
