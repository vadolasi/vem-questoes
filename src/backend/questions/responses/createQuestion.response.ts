import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class CreateQuestionResponse {
  @Field(_type => ID)
  id: string
}
