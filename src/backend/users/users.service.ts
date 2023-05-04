import { Service } from "typedi"
import { PrismaService } from "../prisma"

@Service()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id }
    })
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }
}
