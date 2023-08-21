import { useState } from "react";

import { SearchInput } from "@/components/SearchInput";
import { Checkbox } from "@/components/Checkbox";

import { graphql } from "@/gql";
import { useQuery, useMutation } from "urql";

import { AiOutlineFilter, AiOutlineUndo } from "react-icons/ai";

import {
  ContainerFilter,
  Fieldset,
  ButtonFilter,
} from "../../components/styles";

import Layout from "@/components/layout";
import QuestionRunner from "@/components/QuestionRunner";
import Select from "@/components/Filter/Select";

const resolverQuestionMutation = graphql(/* GraphQL */ `
  mutation ResolveQuestion($questionId: String!, $alternativeId: String!) {
    addAnswer(questionId: $questionId, alternativeId: $alternativeId) {
      correct
      correctAlternative
    }
  }
`);

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
`);

const getQuestionQuery = graphql(/* GraphQL */ `
  query GetQuestions(
    $page: Float
    $itemsPerPage: Float
    $text: String
    $processoSeletivoIds: [String!]
    $anoIds: [String!]
    $localIds: [String!]
    $perilIds: [String!]
    $areaIds: [String!]
    $subareaIds: [String!]
    $estadoIds: [String!]
    $bancaIds: [String!]
    $apenasRespondidas: Boolean
    $apenasNaoRespondidas: Boolean
    $apenasRespondidasCertas: Boolean
    $apenasRespondidasErradas: Boolean
  ) {
    questions(
      page: $page
      itemsPerPage: $itemsPerPage
      text: $text
      processoSeletivoIds: $processoSeletivoIds
      anoIds: $anoIds
      localIds: $localIds
      perfilIds: $perilIds
      areaIds: $areaIds
      subareaIds: $subareaIds
      estadoIds: $estadoIds
      bancaIds: $bancaIds
      apenasRespondidas: $apenasRespondidas
      apenasNaoRespondidas: $apenasNaoRespondidas
      apenasRespondidasCertas: $apenasRespondidasCertas
      apenasRespondidasErradas: $apenasRespondidasErradas
    ) {
      questions {
        id
        enunciado
        processoSeletivo {
          name
        }
        ano {
          ano
        }
        local {
          name
        }
        perfil {
          name
        }
        area {
          name
        }
        subarea {
          name
        }
        estado {
          name
        }
        banca {
          name
        }
        alternatives {
          id
          text
          letter
        }
      }
      pagesQuantity
      quantity
    }
  }
`);

export default function Questoes() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [{ fetching: loadingReponse }, resolveQuestion] = useMutation(
    resolverQuestionMutation
  );
  const [text, setText] = useState<string | undefined>(undefined);
  const [filterProcessoSeletivo, setFilterProcessoSeletivo] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterAno, setFilterAno] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterLocal, setFilterLocal] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterPerfil, setFilterPerfil] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterArea, setFilterArea] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterSubarea, setFilterSubarea] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterEstado, setFilterEstado] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterBanca, setFilterBanca] = useState<
    { value: string; label: string }[]
  >([]);

  const [resultFilter] = useQuery({
    query: questionsFiltersQuery,
  });
  const { data: filterData } = resultFilter;

  const [filter, setFilter] = useState({
    itemsPerPage: 1,
    text,
    processoSeletivoIds: filterProcessoSeletivo.map((item) => item.value),
    anoIds: filterAno.map((item) => item.value),
    localIds: filterLocal.map((item) => item.value),
    perilIds: filterPerfil.map((item) => item.value),
    areaIds: filterArea.map((item) => item.value),
    subareaIds: filterSubarea.map((item) => item.value),
    estadoIds: filterEstado.map((item) => item.value),
    bancaIds: filterBanca.map((item) => item.value),
  });

  const updateFilter = () => {
    setFilter({
      itemsPerPage: 1,
      text,
      processoSeletivoIds: filterProcessoSeletivo.map((item) => item.value),
      anoIds: filterAno.map((item) => item.value),
      localIds: filterLocal.map((item) => item.value),
      perilIds: filterPerfil.map((item) => item.value),
      areaIds: filterArea.map((item) => item.value),
      subareaIds: filterSubarea.map((item) => item.value),
      estadoIds: filterEstado.map((item) => item.value),
      bancaIds: filterBanca.map((item) => item.value),
    });
  };

  const clearFilter = () => {
    setFilterProcessoSeletivo([]);
    setFilterAno([]);
    setFilterLocal([]);
    setFilterPerfil([]);
    setFilterArea([]);
    setFilterSubarea([]);
    setFilterEstado([]);
    setFilterBanca([]);
    setFilter({
      itemsPerPage: 1,
      text: undefined,
      processoSeletivoIds: [],
      anoIds: [],
      localIds: [],
      perilIds: [],
      areaIds: [],
      subareaIds: [],
      estadoIds: [],
      bancaIds: [],
    });
  };

  const [resultQuestion] = useQuery({
    query: getQuestionQuery,
    variables: {
      ...filter,
      page: questionNumber,
    },
  });

  const { data, fetching } = resultQuestion;

  const currentQuestion = data?.questions.questions[0];

  async function answerQuestion(id: string): Promise<string> {
    const result = await resolveQuestion({
      questionId: currentQuestion?.id!,
      alternativeId: id
    })

    return result.data?.addAnswer.correctAlternative!
  }

  return (
    <Layout page="banco-de-questoes" visible={true}>
      <div className="w-full">
        <ContainerFilter className="w-full">
          <SearchInput
            placeholder="Pesquisar"
            onChange={(text) => setText(text)}
          />
          <div className="inputs">
            <div className="flex flex-wrap gap-2 h-min">
              <Select
                title="Processos seletivos"
                setValue={options => setFilterProcessoSeletivo(options)}
                options={
                  filterData?.processosSeletivos.map(({ id, name }) => ({
                    value: id,
                    label: name
                  })) || []
                }
                value={filterProcessoSeletivo}
              />
              <Select
                title="Anos"
                setValue={options => setFilterAno(options)}
                options={
                  filterData?.anos.map(({ id, ano }) => ({
                    value: id,
                    label: ano.toString()
                  })) || []
                }
                value={filterAno}
              />
              <Select
                title="Locais"
                setValue={options => setFilterLocal(options)}
                options={
                  filterData?.locais.map(({ id, name }) => ({
                    value: id,
                    label: name
                  })) || []
                }
                value={filterLocal}
              />
              <Select
                title="Perfis"
                setValue={options => setFilterPerfil(options)}
                options={
                  filterData?.perfis.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterPerfil}
              />
              <Select
                title="Areas"
                setValue={options => setFilterArea(options)}
                options={
                  filterData?.areas.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterArea}
              />
              <Select
                title="Subareas"
                setValue={options => setFilterSubarea(options)}
                options={
                  filterData?.subareas.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterSubarea}
              />
              <Select
                title="Estados"
                setValue={options => setFilterEstado(options)}
                options={
                  filterData?.estados.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterEstado}
              />
              <Select
                title="Bancas"
                setValue={options => setFilterBanca(options)}
                options={
                  filterData?.bancas.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterBanca}
              />
            </div>

            <Fieldset>
              <legend>Ocultar Questões</legend>
              <Checkbox label="Dos cadernos de erros" />
              <Checkbox label="Dos meus simulados" />
              <Checkbox label="Anuladas" />
              <Checkbox label="Desatualizadas" />
            </Fieldset>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-sm btn-info btn-outline rounded-full w-1/2 md:w-auto flex-1" onClick={updateFilter}>
              <AiOutlineFilter />
              Salvar Filtro
            </button>
            <button className="btn btn-sm btn-error btn-outline rounded-full w-1/2 md:w-auto flex-1" onClick={clearFilter}>
              <AiOutlineUndo />
              Limpar Filtro
            </button>
          </div>
        </ContainerFilter>

        <QuestionRunner
          confetti={true}
          loadingQuestion={fetching}
          loadingReponse={loadingReponse}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          resolveQuestion={answerQuestion}
          totalQuantity={data?.questions.quantity || 0}
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
          extras={true}
        />
      </div>
    </Layout>
  );
}
