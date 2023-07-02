import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Subarea {
  @Field(() => ID)
  id: string

  @Field()
  name: string
}
