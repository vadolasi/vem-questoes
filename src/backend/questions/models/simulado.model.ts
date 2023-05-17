import { ObjectType, Field, ID, registerEnumType } from "type-graphql"
import { Question } from "./question.model"

export enum SimuladoType {
  Random = "RANDOM",
  Custom = "CUSTOM"
}

registerEnumType(SimuladoType, {
  name: "SimuladoType"
})

@ObjectType()
export class Simulado {
  @Field(() => ID)
  id: string

  @Field(() => [Question])
  questions: Question[]

  @Field(() => SimuladoType)
  type: SimuladoType
}
