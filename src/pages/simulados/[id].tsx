import { useState, useEffect } from "react";

import { QuestionContainer } from "../../components/styles/raiz";
import { Content } from "../../components/styles/simulados";
import { graphql } from "@/gql";
import { useQuery, useMutation } from "urql";

import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { Timer } from "@/components/Timer";
import QuestionRunner from "@/components/QuestionRunner";

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetSimulado2($id: String!) {
    simulado(id: $id) {
      totalMinutes
      totalQuestions
      questions {
        id
        enunciado
        alternatives {
          id
          letter
          text
        }
        ano {
          ano
        }
        banca {
          name
        }
        processoSeletivo {
          name
        }
      }
    }
  }
`);

const resolverQuestionMutation = graphql(/* GraphQL */ `
  mutation ResolveQuestionOdSimulado2(
    $questionId: String!
    $alternativeId: String!
    $simuladoId: String!
  ) {
    addAnswer(
      questionId: $questionId
      alternativeId: $alternativeId
      simuladoId: $simuladoId
    ) {
      correct
      correctAlternative
    }
  }
`);

export default function Questoes() {
  const params = useSearchParams();
  const router = useRouter();
  const id = router.query.id as string;

  const [questionNumber, setQuestionNumber] = useState(1);
  const [{ fetching: loadingReponse }, resolveQuestion] = useMutation(resolverQuestionMutation);

  const [expiresAt, setExpiresAt] = useState<Date | null>(null)

  const mode = params.get("mode") || "nuttela"

  const [resultQuestion] = useQuery({
    query: getQuestionQuery,
    variables: {
      id: id!,
    },
  });

  const { data, fetching } = resultQuestion;

  useEffect(() => {
    if (mode === "raiz") {
      setExpiresAt(new Date(Date.now() + (data?.simulado.totalMinutes || 0) * 60000))
    }
  }, [data, mode]);

  const currentQuestion = data?.simulado.questions[questionNumber];

  async function answerQuestion(alternativeId: string): Promise<string> {
    const result = await resolveQuestion({
      questionId: currentQuestion?.id!,
      alternativeId,
      simuladoId: id!
    })

    return result.data?.addAnswer.correctAlternative!
  }

  return (
    <Layout page="simulados" visible={true}>
      <Content>
        <Timer mode={mode as "raiz" | "nutella"} expiresAt={expiresAt} title={`Simulado modo ${mode}`} />
        <QuestionContainer>
          <QuestionRunner
            confetti={false}
            loadingQuestion={fetching}
            loadingReponse={loadingReponse}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            resolveQuestion={answerQuestion}
            totalQuantity={data?.simulado.questions.length!}
            question={currentQuestion ? {
              id: currentQuestion.id,
              ano: currentQuestion.ano?.ano!,
              banca: currentQuestion.banca?.name!,
              enunciado: currentQuestion.enunciado,
              processoSeletivo: currentQuestion.processoSeletivo?.name!,
              alternatives: currentQuestion.alternatives?.map(alternative => ({
                id: alternative.id,
                letter: alternative.letter,
                text: alternative.text
              })) || []
            } : undefined}
          />
        </QuestionContainer>
      </Content>
    </Layout>
  );
}
