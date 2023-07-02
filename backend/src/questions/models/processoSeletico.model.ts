import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class ProcessoSeletivo {
  @Field(() => ID)
  id: string

  @Field()
  name: string
}
