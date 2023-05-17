import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field()
  photoUrl: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  totalQuestions: number

  @Field()
  totalCorrect: number
}
