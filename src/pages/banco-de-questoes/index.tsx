import { useEffect, useState } from "react";

import { Checkbox } from "@/components/Checkbox";

import { AiOutlineDelete } from "react-icons/ai";

import { graphql } from "@/gql";
import { useQuery, useMutation } from "urql";

import { AiOutlineFilter, AiOutlineUndo } from "react-icons/ai";

import { ContainerFilter, Fieldset } from "../../components/styles";

import Layout from "@/components/layout";
import QuestionRunner from "@/components/QuestionRunner";
import Select from "@/components/Filter/Select";
import { useModal } from "@/components/Modal";
import { toast } from "react-toastify";
import { Button } from "@/components/Button";
import { BsFillPlayFill } from "react-icons/bs";

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

const getFiltersQuery = graphql(/* GraphQL */ `
  query GetFilters {
    filtros {
      id
      name
      busca
    }
  }
`);

const addFilterMutation = graphql(/* GraphQL */ `
  mutation AddFilter($name: String!, $filter: String!) {
    createFiltro(name: $name, busca: $filter)
  }
`);

const deleteFilterMutation = graphql(/* GraphQL */ `
  mutation DeleteFilter($id: String!) {
    deleteFiltro(id: $id)
  }
`);

export default function Questoes() {
  const [showFilterMenu, updateFilterMenu, close] = useModal(<ModalMenu />);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [{ fetching: loadingReponse }, resolveQuestion] = useMutation(
    resolverQuestionMutation
  );
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
      processoSeletivoIds: filterProcessoSeletivo.map((item) => item.value),
      anoIds: filterAno.map((item) => item.value),
      localIds: filterLocal.map((item) => item.value),
      perilIds: filterPerfil.map((item) => item.value),
      areaIds: filterArea.map((item) => item.value),
      subareaIds: filterSubarea.map((item) => item.value),
      estadoIds: filterEstado.map((item) => item.value),
      bancaIds: filterBanca.map((item) => item.value),
    });
    setQuestionNumber(1);
  };

  function loadFilter(filter: string) {
    const newFilterData = JSON.parse(filter)
    setFilterProcessoSeletivo(newFilterData.processoSeletivoIds.map((id: string) => ({ value: id, label: (filterData?.processosSeletivos || []).find((processo: any) => processo.id === id)?.name || "" })))
    setFilterAno(newFilterData.anoIds.map((id: string) => ({ value: id, label: (filterData?.anos || []).find((ano: any) => ano.id === id)?.ano.toString() || "" })))
    setFilterLocal(newFilterData.localIds.map((id: string) => ({ value: id, label: (filterData?.locais || []).find((local: any) => local.id === id)?.name || "" })))
    setFilterPerfil(newFilterData.perilIds.map((id: string) => ({ value: id, label: (filterData?.perfis || []).find((perfil: any) => perfil.id === id)?.name || "" })))
    setFilterArea(newFilterData.areaIds.map((id: string) => ({ value: id, label: (filterData?.areas || []).find((area: any) => area.id === id)?.name || "" })))
    setFilterSubarea(newFilterData.subareaIds.map((id: string) => ({ value: id, label: (filterData?.subareas || []).find((subarea: any) => subarea.id === id)?.name || "" })))
    setFilterEstado(newFilterData.estadoIds.map((id: string) => ({ value: id, label: (filterData?.estados || []).find((estado: any) => estado.id === id)?.name || "" })))
    setFilterBanca(newFilterData.bancaIds.map((id: string) => ({ value: id, label: (filterData?.bancas || []).find((banca: any) => banca.id === id)?.name || "" })))

    setFilter(newFilterData)
    close()
  }

  useEffect(() => {
    updateFilterMenu(<ModalMenu />)
  }, [filter, filterAno, filterLocal, filterPerfil, filterArea, filterSubarea, filterEstado, filterBanca])

  function ModalMenu() {
    const [resultFilters, executeGetResultFilters] = useQuery({
      query: getFiltersQuery,
    });
    const { data: filtersData } = resultFilters;

    const [filterName, setFilterName] = useState<string>("")

    const [{ fetching: loadingAddFilter }, executeAddFilter] = useMutation(addFilterMutation);
    const [{ fetching: loadingDeleteFilter }, executeDeleteFilter] = useMutation(deleteFilterMutation);

    async function addFilter() {
      toast.promise(
        (async () => {
          const { error } = await executeAddFilter({ name: filterName, filter: JSON.stringify(filter) })
          if (error) {
            throw new Error(error.message)
          }
          executeGetResultFilters({ requestPolicy: "network-only" })
          setFilterName("")
        })(),
        {
          pending: "Salvando filtro...",
          success: "Filtro salvo com sucesso!",
          error: "Erro ao salvar filtro"
        }
      )
    }

    async function deleteFilter(id: string) {
      toast.promise(
        (async () => {
          const { error } = await executeDeleteFilter({ id })
          if (error) {
            throw new Error(error.message)
          }
          executeGetResultFilters({ requestPolicy: "network-only" })
        }
        )(),
        {
          pending: "Deletando filtro...",
          success: "Filtro deletado com sucesso!",
          error: "Erro ao deletar filtro"
        }
      )
    }

    return (
      <>
        <h1 className="text-lg font-bold">Salve seu filtro</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Digite aqui o nome do seu filtro"
            className="w-full p-3 border rounded-md outline-none border-primary"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            disabled={loadingAddFilter}
            key="filterName"
            autoFocus={true}
          />
          <Button className="mb-2 text-white btn-primary btn" onClick={addFilter} loading={loadingAddFilter}>Salvar</Button>
        </div>
        {(filtersData?.filtros?.length || 0) > 0 && (
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Filtros salvos</h1>
            {filtersData?.filtros.map(filtro => (
              <div className="flex items-center gap-2" key={filtro.id}>
                <p className="text-lg font-medium">{filtro.name}</p>
                <button className="btn btn-circle btn-sm btn-outline btn-primary" onClick={() => loadFilter(filtro.busca)}>
                  <BsFillPlayFill />
                </button>
                <button className="btn btn-circle btn-sm btn-outline btn-error" onClick={() => deleteFilter(filtro.id)}>
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  useEffect(() => {
    updateFilter();
  }, [
    filterProcessoSeletivo,
    filterAno,
    filterPerfil,
    filterArea,
    filterSubarea,
    filterEstado,
    filterBanca,
  ]);

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
      alternativeId: id,
    });

    return result.data?.addAnswer.correctAlternative!;
  }

  return (
    <Layout page="banco-de-questoes" visible={true}>
      <div className="w-full">
        <ContainerFilter className="w-full">
          <div className="flex flex-col inputs md:flex-row">
            <div className="flex flex-wrap w-full gap-2 h-min">
              <Select
                title="Processos seletivos"
                setValue={(options) => setFilterProcessoSeletivo(options)}
                options={
                  filterData?.processosSeletivos.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterProcessoSeletivo}
              />
              <Select
                title="Anos"
                setValue={(options) => setFilterAno(options)}
                options={
                  filterData?.anos.map(({ id, ano }) => ({
                    value: id,
                    label: ano.toString(),
                  })) || []
                }
                value={filterAno}
              />
              <Select
                title="Locais"
                setValue={(options) => setFilterLocal(options)}
                options={
                  filterData?.locais.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  })) || []
                }
                value={filterLocal}
              />
              <Select
                title="Perfis"
                setValue={(options) => setFilterPerfil(options)}
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
                setValue={(options) => setFilterArea(options)}
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
                setValue={(options) => setFilterSubarea(options)}
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
                setValue={(options) => setFilterEstado(options)}
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
                setValue={(options) => setFilterBanca(options)}
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

          <div className="flex flex-col gap-2 md:flex-row">
            <button
              className="flex-1 w-full rounded-full btn btn-sm btn-info btn-outline md:w-auto"
              onClick={() => {
                showFilterMenu();
              }}
            >
              <AiOutlineFilter />
              Meus filtros
            </button>
            <button
              className="flex-1 w-full rounded-full btn btn-sm btn-error btn-outline md:w-auto"
              onClick={clearFilter}
            >
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
          question={
            currentQuestion
              ? {
                  id: currentQuestion.id,
                  ano: currentQuestion.ano?.ano!,
                  banca: currentQuestion.banca?.name!,
                  enunciado: currentQuestion.enunciado,
                  processoSeletivo: currentQuestion.processoSeletivo?.name!,
                  alternatives:
                    currentQuestion.alternatives?.map((alternative) => ({
                      id: alternative.id,
                      letter: alternative.letter,
                      text: alternative.text,
                    })) || [],
                }
              : undefined
          }
          extras={true}
        />
      </div>
    </Layout>
  );
}
