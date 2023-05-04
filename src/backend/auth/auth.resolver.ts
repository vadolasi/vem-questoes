import { Arg, Mutation, Resolver } from "type-graphql"
import { Service } from "typedi"
import { AuthService } from "./auth.service"
import { LoginInput } from "./inputs/login.input"

@Service()
@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation(() => String)
  async login(
    @Arg("data") { email, password }: LoginInput
  ) {
    return this.authService.login(email, password)
  }
}
