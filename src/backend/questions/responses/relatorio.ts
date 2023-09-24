import { Field, ObjectType } from "type-graphql"

@ObjectType()
class Questions {
  @Field()
  date: string

  @Field()
  total: number

  @Field()
  totalCorrect: number
}

@ObjectType()
class Materias {
  @Field()
  nome: string

  @Field()
  total: number

  @Field()
  correto: number
}

@ObjectType()
export class RelatorioResponse {
  @Field(_type => [Questions])
  questions: Questions[]

  @Field(_type => [Materias])
  materias: Materias[]

  @Field()
  total: number

  @Field()
  correto: number
}
