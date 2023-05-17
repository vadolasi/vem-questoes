import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Banca {
  @Field(() => ID)
  id: string

  @Field()
  name: string
}
