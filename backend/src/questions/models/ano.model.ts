import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Ano {
  @Field(() => ID)
  id: string

  @Field()
  ano: number
}
