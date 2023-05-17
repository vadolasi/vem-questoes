import { Field, ObjectType } from "type-graphql"
import { Question } from "../models/question.model"

@ObjectType()
export class QuestionsResponse {
  @Field(() => [Question])
  questions: Question[]

  @Field()
  pagesQuantity: number
}
