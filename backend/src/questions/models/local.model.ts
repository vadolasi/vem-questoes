import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Local {
  @Field(() => ID)
  id: string

  @Field()
  name: string
}
