import { Arg, Args, Authorized, Info, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { QuestionsService } from "./questions.service"
import { ProcessoSeletivo } from "./models/processoSeletico.model"
import { Ano } from "./models/ano.model"
import { Local } from "./models/local.model"
import { Perfil } from "./models/perfil.model"
import { Area } from "./models/area.model"
import { Subarea } from "./models/subarea.model"
import { Estado } from "./models/estado.model"
import { Banca } from "./models/banca.model"
import { Question } from "./models/question.model"
import { GetQuestionsInput } from "./inputs/getQuestions.input"
import { CurrentUserID } from "../auth"
import type { GraphQLResolveInfo } from "graphql"
import { Notebook } from "./models/notebook.model"
import { Simulado } from "./models/simulado.model"
import { AreaToSimuladoInput } from "./inputs/areaForSimulado.input"

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
  @Query(() => [Area])
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
  @Query(() => [Question])
  async questions(
    @Args() { text, processoSeletivoId, anoId, localId, perfilId, areaId, subareaId, estadoId, bancaId }: GetQuestionsInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const requestedFields = info.fieldNodes[0].selectionSet?.selections.map((selection) => (selection as { name: { value: string } }).name.value) || []

    return await this.questionsService.getQuestions(
      requestedFields,
      text,
      processoSeletivoId,
      anoId,
      localId,
      perfilId,
      areaId,
      subareaId,
      estadoId,
      bancaId
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
  @Mutation(() => Boolean)
  async addAnswer(
    @CurrentUserID() userId: string,
    @Arg("questionId") questionId: string,
    @Arg("alternativeId") alternativeId: string
  ) {
    return await this.questionsService.resolveQuestion(userId, questionId, alternativeId)
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
  @Mutation(() => Boolean)
  async addNotebook(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("questions", type => [String]) questions: string[]
  ) {
    return await this.questionsService.addNotebook(userId, name, questions)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async updateNotebook(
    @CurrentUserID() userId: string,
    @Arg("notebookId") notebookId: string,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("questions", type => [String], { nullable: true }) questions?: string[]
  ) {
    return await this.questionsService.updateNotebook(userId, notebookId, name, questions)
  }

  @Authorized()
  @Query(() => [Notebook])
  async notebooks(
    @CurrentUserID() userId: string
  ) {
    return await this.questionsService.getNotebooks(userId)
  }

  @Authorized()
  @Query(() => Notebook)
  async notebook(
    @CurrentUserID() userId: string,
    @Arg("notebookId") notebookId: string
  ) {
    return await this.questionsService.getNotebook(userId, notebookId)
  }

  @Authorized()
  @Mutation(() => Simulado)
  async createSimulado(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("areas", () => [AreaToSimuladoInput]) areas: AreaToSimuladoInput[]
  ) {
    return await this.questionsService.createSimulado(userId, name, areas)
  }
}
