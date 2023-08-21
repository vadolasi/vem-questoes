import { Args, Ctx, Mutation, Resolver } from "type-graphql"
import { Service } from "typedi"
import { AuthService } from "./auth.service"
import { LoginInput } from "./inputs/login.input"
import type { ContextType } from "../auth"
import { Role, User } from "../users/models/user.model"

@Service()
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation(() => User)
  async login(
    @Args() { email, password }: LoginInput,
    @Ctx() ctx: ContextType
  ): Promise<User> {
    const { accessToken, refreshToken, user } = await this.authService.login(email, password)

    ctx.setTokens(accessToken, refreshToken)

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      photoUrl: user.photoUrl,
      role: Role[user.role.valueOf() as any] as any,
      totalCorrect: user.totalCorrect,
      totalQuestions: user.totalQuestions
    }
  }

  @Mutation(() => Boolean)
  async refreshToken(
    @Ctx() ctx: ContextType
  ) {
    const newAccessToken = await this.authService.refreshToken(ctx.getRefreshToken())

    ctx.setToken(newAccessToken)

    return true
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: ContextType) {
    await this.authService.logout(ctx.getRefreshToken())

    ctx.clearTokens()

    return true
  }
}
