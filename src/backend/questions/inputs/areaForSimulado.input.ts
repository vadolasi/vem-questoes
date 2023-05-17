import { Field, ID, InputType } from "type-graphql"

@InputType()
export class AreaToSimuladoInput {
  @Field(() => ID)
  areaId: string

  @Field()
  quantity: number
}
