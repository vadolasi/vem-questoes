import { Authorized, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { UsersService } from "./users.service"
import { User } from "./models/user.model"
import { CurrentUserID } from "../auth"

@Service()
@Resolver()
export class UserResolver {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Query(() => User, { nullable: true })
  @Authorized()
  async me(@CurrentUserID() userId: string) {
    return this.usersService.getUserById(userId)
  }
}
