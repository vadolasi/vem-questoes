import { ObjectType, Field, ID } from "type-graphql"
import { Question } from "./question.model"

@ObjectType()
export class Simulado {
  @Field(() => ID)
  id: string

  @Field(() => [Question])
  questions: Question[]
}
