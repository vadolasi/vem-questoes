import { Field, ObjectType } from "type-graphql"
import { Area } from "./area.model"

@ObjectType()
export class RaioX {
  @Field(_type => Area)
  area: Area

  @Field()
  relevancia: number

  @Field()
  desempenho: number
}
