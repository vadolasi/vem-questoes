import { Arg, Args, Authorized, Info, Mutation, Query, Resolver, registerEnumType } from "type-graphql"
import { Service } from "typedi"
import { QuestionsService } from "./questions.service"
import { ProcessoSeletivo } from "./models/processoSeletico.model"
import { Ano } from "./models/ano.model"
import { Local } from "./models/local.model"
import { Perfil } from "./models/perfil.model"
import { Area, AreasResponse } from "./models/area.model"
import { Subarea } from "./models/subarea.model"
import { Estado } from "./models/estado.model"
import { Banca } from "./models/banca.model"
import { Question } from "./models/question.model"
import { Comment } from "./models/comment.model"
import { GetQuestionsInput } from "./inputs/getQuestions.input"
import { CurrentUserID } from "../auth"
import type { GraphQLResolveInfo } from "graphql"
import { NotebookModel } from "./models/notebook.model"
import { Simulado, SimuladoType } from "./models/simulado.model"
import { AreaToSimuladoInput } from "./inputs/areaForSimulado.input"
import { QuestionsResponse } from "./responses/questions.response"
import { SimuladosResponse } from "./responses/simulados.response"
import { AddAnswerResponse } from "./responses/addAnswer"
import { RelatorioResponse } from "./responses/relatorio"
import { CreateQuestionInput } from "./inputs/createQuestion.input"
import { CreateQuestionResponse } from "./responses/createQuestion.response"
import { RaioX } from "./models/raiox.model"
import { MostWrong } from "./models/mostWrong.model"

function getRequestedFields(info: GraphQLResolveInfo): string[] {
  const fieldList: string[] = [];

  const traverse = (node: any, path: string) => {
    const selectionSet = node.selectionSet;
    if (selectionSet) {
      const selections = selectionSet.selections;
      selections.forEach((selection: any) => {
        const fieldName = selection.name.value;
        const fieldPath = path ? `${path}.${fieldName}` : fieldName;
        fieldList.push(fieldPath);
        traverse(selection, fieldPath);
      });
    }
  };

  traverse(info.fieldNodes[0], '');

  return fieldList;
}

enum LTE {
  dia = "dia",
  semana = "semana",
  mes = "mes",
  trimestre = "trimestre",
  ano = "ano"
}

registerEnumType(LTE, {
  name: "LTE"
})

@Service()
@Resolver()
export class QuestionsResolver {
  constructor(
    private readonly questionsService: QuestionsService
  ) {}

  @Authorized()
  @Query(() => [ProcessoSeletivo])
  async processosSeletivos() {
    return this.questionsService.getProcessosSeletivos()
  }

  @Authorized()
  @Query(() => [Ano])
  async anos() {
    return this.questionsService.getAnos()
  }

  @Authorized()
  @Query(() => [Local])
  async locais() {
    return this.questionsService.getLocais()
  }

  @Authorized()
  @Query(() => [Perfil])
  async perfis() {
    return this.questionsService.getPerfis()
  }

  @Authorized()
  @Query(() => [AreasResponse])
  async areas() {
    return this.questionsService.getAreas()
  }

  @Authorized()
  @Query(() => [Subarea])
  async subareas() {
    return this.questionsService.getSubareas()
  }

  @Authorized()
  @Query(() => [Estado])
  async estados() {
    return this.questionsService.getEstados()
  }

  @Authorized()
  @Query(() => [Banca])
  async bancas() {
    return this.questionsService.getBancas()
  }

  @Authorized()
  @Query(() => QuestionsResponse)
  async questions(
    @Args() { page, itemsPerPage, text, processoSeletivoIds, anoIds, localIds, perfilIds, areaIds, subareaIds, estadoIds, bancaIds, apenasNaoRespondidas, apenasRespondidas, apenasRespondidasCertas, apenasRespondidasErradas }: GetQuestionsInput,
    @Info() info: GraphQLResolveInfo,
    @CurrentUserID() userId: string
  ) {
    const requestedFields = getRequestedFields(info).filter(field => field.startsWith("questions.")).map(field => field.split(".")[1])

    return await this.questionsService.getQuestions(
      userId,
      page,
      itemsPerPage,
      requestedFields,
      text,
      processoSeletivoIds,
      anoIds,
      localIds,
      perfilIds,
      areaIds,
      subareaIds,
      estadoIds,
      bancaIds,
      apenasNaoRespondidas,
      apenasRespondidas,
      apenasRespondidasCertas,
      apenasRespondidasErradas
    )
  }

  @Authorized()
  @Query(() => [Question])
  async question(
    @Info() info: GraphQLResolveInfo,
    @Arg("id") id: string
  ) {
    const requestedFields = info.fieldNodes[0].selectionSet?.selections.map((selection) => (selection as { name: { value: string } }).name.value) || []

    return await this.questionsService.getQuestion(id, requestedFields)
  }

  @Authorized()
  @Mutation(() => AddAnswerResponse)
  async addAnswer(
    @CurrentUserID() userId: string,
    @Arg("questionId") questionId: string,
    @Arg("alternativeId") alternativeId: string,
    @Arg("simuladoId", { nullable: true }) simuladoId?: string,
    @Arg("notebookId", { nullable: true }) notebookId?: string
  ) {
    return await this.questionsService.resolveQuestion(userId, questionId, alternativeId, simuladoId, notebookId)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async addComment(
    @CurrentUserID() userId: string,
    @Arg("questionId") questionId: string,
    @Arg("content") content: string
  ) {
    return await this.questionsService.addComment(userId, questionId, content)
  }

  @Authorized()
  @Mutation(() => NotebookModel)
  async addNotebook(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("description", { nullable: true }) description: string
  ) {
    return await this.questionsService.addNotebook(userId, name, description)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async updateNotebook(
    @CurrentUserID() userId: string,
    @Arg("notebookId") notebookId: string,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("description", { nullable: true }) description?: string,
    @Arg("questions", type => [String], { nullable: true }) questions?: string[]
  ) {
    await this.questionsService.updateNotebook(userId, notebookId, name, description, questions)

    return true
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteNotebook(
    @CurrentUserID() userId: string,
    @Arg("id") id: string,
  ) {
    await this.questionsService.deleteNotebook(userId, id)

    return true
  }

  @Authorized()
  @Query(() => [NotebookModel])
  async notebooks(
    @CurrentUserID() userId: string
  ) {
    return await this.questionsService.getNotebooks(userId)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteComment(
    @CurrentUserID() userId: string,
    @Arg("commentId") commentId: string
  ) {
    return await this.questionsService.deleteComment(userId, commentId)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async editComment(
    @CurrentUserID() userId: string,
    @Arg("commentId") commentId: string,
    @Arg("content") content: string
  ) {
    return await this.questionsService.editComment(userId, commentId, content)
  }

  @Authorized()
  @Query(() => NotebookModel)
  async notebook(
    @CurrentUserID() userId: string,
    @Arg("notebookId") notebookId: string
  ) {
    return await this.questionsService.getNotebook(userId, notebookId)
  }

  @Authorized()
  @Mutation(() => NotebookModel)
  async addQuestionToNotebook(
    @CurrentUserID() userId: string,
    @Arg("id") notebookId: string,
    @Arg("questionId") questionId: string
  ) {
    return await this.questionsService.addQuestionToNotebook(userId, notebookId, questionId)
  }

  @Authorized()
  @Mutation(() => NotebookModel)
  async removeQuestionFromNotebook(
    @CurrentUserID() userId: string,
    @Arg("id") notebookId: string,
    @Arg("questionId") questionId: string
  ) {
    return await this.questionsService.removeQuestionFromNotebook(userId, notebookId, questionId)
  }

  @Authorized()
  @Query(() => SimuladosResponse)
  async simulados(
    @CurrentUserID() userId: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("itemsPerPage", { defaultValue: 10 }) itemsPerPage: number
  ) {
    return await this.questionsService.simulados(page, itemsPerPage, userId)
  }

  @Authorized()
  @Query(() => Simulado)
  async simulado(
    @CurrentUserID() userId: string,
    @Arg("id") id: string
  ) {
    return await this.questionsService.simulado(id, userId)
  }

  @Authorized()
  @Mutation(() => Simulado)
  async createSimulado(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("type") type: SimuladoType,
    @Arg("areas", type => [AreaToSimuladoInput], { nullable: true }) areas?: AreaToSimuladoInput[],
    @Arg("quantity", { nullable: true }) quantity?: number
  ) {
    return await this.questionsService.createSimulado(userId, name, type, quantity, areas)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteSimulado(
    @CurrentUserID() userId: string,
    @Arg("id") id: string
  ) {
    return await this.questionsService.deleteSimulado(userId, id)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async updateSimulado(
    @CurrentUserID() userId: string,
    @Arg("id") id: string,
    @Arg("name") name: string
  ) {
    return await this.questionsService.updateSimulado(userId, id, name)
  }

  @Authorized()
  @Query(() => [MostWrong])
  async mostWrong() {
    return await this.questionsService.mostWrong()
  }

  @Authorized()
  @Query(returns => RelatorioResponse)
  async relatorio(
    @CurrentUserID() userId: string,
    @Arg("lte", type => LTE) lte: LTE
  ) {
    return await this.questionsService.relatorioDeDesempenho(userId, lte)
  }

  @Authorized()
  @Query(_returns => [Comment])
  async comments(
    @Arg("questionId") questionId: string
  ) {
    return await this.questionsService.getComments(questionId)
  }

  @Authorized()
  @Query(_returns => CreateQuestionResponse)
  async createQuestion(
    @Args() {
      enunciado,
      alternatives,
      correct,
      processoSeletivoId,
      newProcessoSeletivo,
      anoId,
      newAno,
      localId,
      newLocal,
      perfilId,
      newPerfil,
      areaId,
      newArea,
      subAreaId,
      newSubArea,
      estadoId,
      newEstado,
      bancaId,
      newBanca
    }: CreateQuestionInput
  ): Promise<CreateQuestionResponse> {
    return await this.questionsService.createQuestion({
      enunciado,
      alternatives,
      correct,
      processoSeletivo: {
        id: processoSeletivoId,
        new: newProcessoSeletivo ? {
          name: newProcessoSeletivo
        } : undefined
      },
      ano: {
        id: anoId,
        new: newAno ? {
          ano: newAno
        } : undefined
      },
      local: {
        id: localId,
        new: newLocal ? {
          name: newLocal
        } : undefined
      },
      perfil: {
        id: perfilId,
        new: newPerfil ? {
          name: newPerfil
        } : undefined
      },
      area: {
        id: areaId,
        new: newArea ? {
          name: newArea
        } : undefined
      },
      subarea: {
        id: subAreaId,
        new: newSubArea ? {
          name: newSubArea
        } : undefined
      },
      estado: {
        id: estadoId,
        new: newEstado ? {
          name: newEstado
        } : undefined
      },
      banca: {
        id: bancaId,
        new: newBanca ? {
          name: newBanca
        } : undefined
      }
    })
  }

  @Authorized()
  @Query(_returns => [ProcessoSeletivo])
  async provas(
    @CurrentUserID() userId: string
  ) {
    return this.questionsService.provas(userId)
  }

  @Authorized()
  @Query(_returns => [RaioX])
  async raioX(
    @CurrentUserID() userId: string,
    @Arg("provaId") provaId: string
  ) {
    return this.questionsService.raioX(userId, provaId)
  }
}
