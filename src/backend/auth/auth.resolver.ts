import { Args, Ctx, Mutation, Resolver } from "type-graphql"
import { Service } from "typedi"
import { AuthService } from "./auth.service"
import { LoginInput } from "./inputs/login.input"
import type { ContextType } from "../auth"

@Service()
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation(() => Boolean)
  async login(
    @Args() { email, password }: LoginInput,
    @Ctx() ctx: ContextType
  ) {
    const { accessToken, refreshToken } = await this.authService.login(email, password)

    ctx.setTokens(accessToken, refreshToken)

    return true
  }

  @Mutation(() => Boolean)
  async refreshToken(
    @Ctx() ctx: ContextType
  ) {
    const newAccessToken = await this.authService.refreshToken(ctx.getRefreshToken())

    ctx.setToken(newAccessToken)

    return true
  }
}
