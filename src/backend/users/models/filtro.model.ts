import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
export class Filter {
  @Field(_type => ID)
  id: string

  @Field()
  name: string

  @Field()
  busca: string
}
