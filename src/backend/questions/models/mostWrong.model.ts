import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
class MostWrongAlternative {
  @Field(_type => ID)
  id: string

  @Field()
  letter: string

  @Field()
  text: string

  @Field()
  correct: boolean

  @Field()
  wrongQuantity: number
}

@ObjectType()
export class MostWrong {
  @Field(_type => ID)
  id: string

  @Field()
  text: string

  @Field(_type => [MostWrongAlternative])
  alternatives: MostWrongAlternative[]

  @Field()
  wrongQuantity: number
}
