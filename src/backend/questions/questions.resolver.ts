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
    @Args() { processoSeletivoId, anoId, localId, perfilId, areaId, subareaId, estadoId, bancaId }: GetQuestionsInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const requestedFields = info.fieldNodes[0].selectionSet?.selections.map((selection) => (selection as any).name.value) as string[]

    return this.questionsService.getQuestions(
      requestedFields,
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
  @Mutation(() => Boolean)
  async addAnswer(
    @CurrentUserID() userId: string,
    @Arg("questionId") questionId: string,
    @Arg("alternativeId") alternativeId: string
  ) {
    return await this.questionsService.resolveQuestion(userId, questionId, alternativeId)
  }
}
