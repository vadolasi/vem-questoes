import { Service } from "typedi"
import { UsersService } from "../users/users.service"
import bcrypt from "bcryptjs"
import { PrismaService } from "../prisma"
import jwt from "jsonwebtoken"
import { GraphQLError } from "graphql"

@Service()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.getByEmail(email)
    if (!user) throw new GraphQLError("No user found")

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new GraphQLError("Invalid password")

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

  async refreshToken(refreshToken: string | null) {
    if (!refreshToken) throw new Error("No refresh token provided")

    const refreshTokenObject = await this.prisma.refreshToken.findUnique({
      where: { id: refreshToken },
      select: { expiresAt: true, user: { select: { id: true } } }
    })

    if (!refreshTokenObject) throw new GraphQLError("Invalid refresh token")
    if (refreshTokenObject.expiresAt < new Date()) throw new GraphQLError("Refresh token expired")

    const userId = refreshTokenObject.user.id

    const accessToken = await new Promise<string>(resolve => jwt.sign(
      { userId },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
      (_, token) => resolve(token as string)
    ))

    return accessToken
  }

  async logout(refreshToken: string | null) {
    if (!refreshToken) throw new Error("No refresh token provided")

    await this.prisma.refreshToken.delete({ where: { id: refreshToken } })
  }
}
