import { ArgsType, Field } from "type-graphql"

@ArgsType()
export class GetQuestionsInput {
  @Field({ nullable: true, defaultValue: 1 })
  page: number

  @Field({ nullable: true, defaultValue: 10 })
  itemsPerPage: number

  @Field({ nullable: true })
  text?: string

  @Field(() => [String], { defaultValue: [] })
  processoSeletivoIds: string[]

  @Field(() => [String], { defaultValue: [] })
  anoIds: string[]

  @Field(() => [String], { defaultValue: [] })
  localIds: string[]

  @Field(() => [String], { defaultValue: [] })
  perfilIds: string[]

  @Field(() => [String], { defaultValue: [] })
  areaIds: string[]

  @Field(() => [String], { defaultValue: [] })
  subareaIds: string[]

  @Field(() => [String], { defaultValue: [] })
  estadoIds: string[]

  @Field(() => [String], { defaultValue: [] })
  bancaIds: string[]

  @Field({ nullable: true })
  apenasRespondidas?: boolean

  @Field({ nullable: true })
  apenasNaoRespondidas?: boolean

  @Field({ nullable: true })
  apenasRespondidasCertas?: boolean

  @Field({ nullable: true })
  apenasRespondidasErradas?: boolean
}
