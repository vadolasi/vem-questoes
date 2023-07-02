import { Field, ObjectType } from "type-graphql"
import { Simulado } from "../models/simulado.model"

@ObjectType()
export class SimuladosResponse {
  @Field(() => [Simulado])
  simulados: Simulado[]

  @Field()
  pagesQuantity: number
}
