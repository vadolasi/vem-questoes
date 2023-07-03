import { Field, ID, ObjectType } from "type-graphql"
import { Question } from "./question.model"

@ObjectType()
export class NotebookModel {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field(() => [Question])
  questions: Question[]
}
