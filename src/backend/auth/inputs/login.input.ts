import { ArgsType, Field } from "type-graphql"

@ArgsType()
export class LoginInput {
  @Field()
  email: string

  @Field()
  password: string
}
