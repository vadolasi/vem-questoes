import { ArgsType, Field } from "type-graphql"

@ArgsType()
export class GetQuestionsInput {
  @Field({ nullable: true, defaultValue: 1 })
  page: number

  @Field({ nullable: true, defaultValue: 10 })
  itemsPerPage: number

  @Field({ nullable: true })
  text?: string

  @Field({ nullable: true })
  processoSeletivoId?: string

  @Field({ nullable: true })
  anoId?: string

  @Field({ nullable: true })
  localId?: string

  @Field({ nullable: true })
  perfilId?: string

  @Field({ nullable: true })
  areaId?: string

  @Field({ nullable: true })
  subareaId?: string

  @Field({ nullable: true })
  estadoId?: string

  @Field({ nullable: true })
  bancaId?: string
}
