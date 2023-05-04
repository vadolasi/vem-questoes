import { Service } from "typedi"
import { UsersService } from "../users/users.service"
import { compare } from "bcrypt"

@Service()
export class AuthService {
  constructor(
    private readonly usersService: UsersService
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.getByEmail(email)
    if (!user) throw new Error("No user found")

    const valid = await compare(password, user.password)
    if (!valid) throw new Error("Invalid password")

    return user.id
  }
}
