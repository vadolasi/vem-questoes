import { Arg, Args, Authorized, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { UsersService } from "./users.service"
import { Role, User } from "./models/user.model"
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
    return this.usersService.getById(userId)
  }

  @Query(() => [User], { nullable: true })
  @Authorized()
  async leaderBoard() {
    return this.usersService.leaderBoard()
  }

  @Mutation(returns => User)
  @Authorized()
  async createUser(
    @Arg("email") email: string,
    @Arg("name") name: string,
    @Arg("password") password: string,
    @Arg("role") role: Role
  ) {
    return await this.usersService.createUser(name, email, password, role)
  }

  @Query(returns => [User])
  @Authorized()
  async users() {
    return await this.usersService.getUsers()
  }
}
