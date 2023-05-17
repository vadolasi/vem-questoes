import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Alternative {
  @Field(() => ID)
  id: string

  @Field()
  text: string

  @Field()
  letter: string

  @Field()
  correct: boolean
}
