import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
class MostWrongAlternative {
  @Field(_type => ID)
  alternativeId: string

  @Field()
  alternativeText: string

  @Field()
  wrongQuantity: number
}

@ObjectType()
export class MostWrong {
  @Field(_type => ID)
  questionId: string

  @Field()
  questionText: string

  @Field(_type => [MostWrongAlternative])
  alternatives: MostWrongAlternative[]

  @Field()
  wrongQuantity: number
}
