import { Field, ID, ObjectType } from "type-graphql"
import { Question } from "./question.model"

@ObjectType()
export class Notebook {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => [Question])
  questions: Question[]
}
