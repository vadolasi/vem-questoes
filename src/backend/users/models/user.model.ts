import { ObjectType, Field, ID } from "type-graphql"
import { registerEnumType } from "type-graphql"

export enum Role {
  USER,
  ADMIN,
  DEVELOPER
}

registerEnumType(Role, { name: "Role" })

@ObjectType()
export class User {
  @Field(type => ID)
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

  @Field(type => Role)
  role: Role
}
