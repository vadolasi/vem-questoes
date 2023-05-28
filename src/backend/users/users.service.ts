import { Service } from "typedi"
import { PrismaService } from "../prisma"
import { Role } from "./models/user.model"
import { hash } from "bcrypt"

@Service()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id }
    })
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async leaderBoard() {
    return this.prisma.user.findMany({
      where: { role: "USER" },
      orderBy: { totalCorrect: "desc" },
      take: 10
    })
  }

  async createUser(name: string, email: string, password: string, role: Role) {
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password: await hash(password, 12),
        role: Role[role] as "USER" | "DEVELOPER" | "ADMIN",
        totalCorrect: 0,
        totalQuestions: 0
      }
    })
  }

  async getUsers() {
    return (await this.prisma.user.findMany({})).map(user => ({
      id: user.id,
      photoUrl: user.photoUrl,
      email: user.email,
      name: user.name,
      totalQuestions: user.totalQuestions,
      totalCorrect: user.totalCorrect,
      role: Role[user.role]
    }))
  }
}
