import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Notification {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field()
  body: string
}
