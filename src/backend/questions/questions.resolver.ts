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
import { NotebookModel } from "./models/notebook.model"
import { Simulado, SimuladoType } from "./models/simulado.model"
import { AreaToSimuladoInput } from "./inputs/areaForSimulado.input"
import { QuestionsResponse } from "./responses/questions.response"
import { SimuladosResponse } from "./responses/simulados.response"
import { AddAnswerResponse } from "./responses/addAnswer"

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
  @Query(() => QuestionsResponse)
  async questions(
    @Args() { page, itemsPerPage, text, processoSeletivoId, anoId, localId, perfilId, areaId, subareaId, estadoId, bancaId, apenasNaoRespondidas, apenasRespondidas, apenasRespondidasCertas, apenasRespondidasErradas }: GetQuestionsInput,
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
      processoSeletivoId,
      anoId,
      localId,
      perfilId,
      areaId,
      subareaId,
      estadoId,
      bancaId,
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
    @Arg("simuladoId", { nullable: true }) simuladoId?: string
  ) {
    return await this.questionsService.resolveQuestion(userId, questionId, alternativeId, simuladoId)
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
    @Arg("questions", type => [String]) questions: string[],
    @Arg("description", { nullable: true }) description: string
  ) {
    return await this.questionsService.addNotebook(userId, name, questions, description)
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
  @Query(() => NotebookModel)
  async notebook(
    @CurrentUserID() userId: string,
    @Arg("notebookId") notebookId: string
  ) {
    return await this.questionsService.getNotebook(userId, notebookId)
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
  @Mutation(() => Simulado)
  async createSimulado(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("type") type: SimuladoType,
    @Arg("areas", type => [AreaToSimuladoInput]) areas: AreaToSimuladoInput[]
  ) {
    return await this.questionsService.createSimulado(userId, name, type, areas)
  }
}
