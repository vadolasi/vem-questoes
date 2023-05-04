import { Service } from "typedi"
import { UsersService } from "../users/users.service"
import { compare } from "bcrypt"
import { PrismaService } from "../prisma"
import jwt from "jsonwebtoken"

@Service()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService
  ) {}

  async login(email: string, password: string) {
     const user = await this.usersService.getByEmail(email)
    if (!user) throw new Error("No user found")

    const valid = await compare(password, user.password)
    if (!valid) throw new Error("Invalid password")

    const { id: refreshToken } = await this.prisma.refreshToken.create({
      data: {
        user: { connect: { id: user.id } },
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
      },
      select: { id: true }
    })

    const accessToken = await new Promise<string>(resolve => jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
      (_, token) => resolve(token as string)
    ))

    return { accessToken, refreshToken }
  }
}
