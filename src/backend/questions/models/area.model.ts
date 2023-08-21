import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Area {
  @Field(() => ID)
  id: string

  @Field()
  name: string
}

@ObjectType()
export class AreasResponse {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  count: number
}
