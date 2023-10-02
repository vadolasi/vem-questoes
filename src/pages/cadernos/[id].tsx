import { useState } from "react";

import { QuestionContainer } from "../../components/styles/nuttela";

import { Content } from "../../components/styles/simulados";

import { Timer } from "@/components/Timer";

import { graphql } from "@/gql";
import { useQuery, useMutation } from "urql";

import { useSearchParams } from "next/navigation";
import Layout from "@/components/layout";
import QuestionRunner from "@/components/QuestionRunner";

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetNotebook($id: String!) {
    notebook(notebookId: $id) {
      name
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
  mutation ResolveQuestionOnNotebook(
    $questionId: String!
    $alternativeId: String!
    $notebookId: String!
  ) {
    addAnswer(
      questionId: $questionId
      alternativeId: $alternativeId
      notebookId: $notebookId
    ) {
      correct
      correctAlternative
    }
  }
`);

export default function Questoes() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [{ fetching: loadingReponse }, resolveQuestion] = useMutation(resolverQuestionMutation)
  const [isRunning, setIsRunning] = useState(false)

  const params = useSearchParams();

  const id = params.get("id");

  const [resultQuestion] = useQuery({
    query: getQuestionQuery,
    variables: {
      id: id!,
    },
  });

  const { data, fetching } = resultQuestion;

  const currentQuestion = data?.notebook.questions[questionNumber - 1];

  async function answerQuestion(id: string): Promise<string> {
    const result = await resolveQuestion({
      questionId: currentQuestion?.id!,
      alternativeId: id,
      notebookId: id!
    })

    return result.data?.addAnswer.correctAlternative!
  }

  return (
    <Layout page="cadernos" visible={true}>
      <Content>
        <Timer mode="nutella" title={data?.notebook?.name || "Caderno de erros"} setIsRunning={setIsRunning} />
        <QuestionContainer>
          <QuestionRunner
            confetti={true}
            loadingQuestion={fetching}
            loadingReponse={loadingReponse}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            resolveQuestion={answerQuestion}
            totalQuantity={data?.notebook.questions.length || 0}
            extras={true}
            notebooksOnly={true}
            active={isRunning}
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
