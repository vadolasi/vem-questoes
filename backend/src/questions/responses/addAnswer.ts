import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class AddAnswerResponse {
  @Field()
  correct: boolean

  @Field()
  correctAlternative: string
}
