import { User } from "@/backend/users/models/user.model"
import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string

  @Field()
  content: string

  @Field()
  user: User
}
