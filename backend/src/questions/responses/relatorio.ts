import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class RelatorioResponse {
  @Field()
  date: string

  @Field()
  total: number

  @Field()
  totalCorrect: number
}
