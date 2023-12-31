import { Service } from "typedi"
import prisma from "../../lib/prisma"
import { Role } from "./models/user.model"
import bcryptjs from "bcryptjs"
import { GraphQLError } from "graphql"

@Service()
export class UsersService {
  constructor() {}

  async getById(id: string) {
    return prisma.user.findUnique({
      where: { id }
    })
  }

  async getByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  }

  async leaderBoard() {
    return prisma.user.findMany({
      where: { role: "USER" },
      orderBy: { totalCorrect: "desc" },
      take: 10
    })
  }

  async createUser(name: string, email: string, password: string, role: Role) {
    return await prisma.user.create({
      data: {
        email,
        name,
        password: await bcryptjs.hash(password, 12),
        role: Role[role] as keyof typeof Role,
        totalCorrect: 0,
        totalQuestions: 0
      }
    })
  }

  async getUsers() {
    return (await prisma.user.findMany({})).map(user => ({
      id: user.id,
      photoUrl: user.photoUrl,
      email: user.email,
      name: user.name,
      totalQuestions: user.totalQuestions,
      totalCorrect: user.totalCorrect,
      role: Role[user.role as any]
    }))
  }

  async deleteUser(id: string) {
    await prisma.user.delete({ where: { id } })
    return true
  }

  async updateUser(
    id: string,
    name: string | undefined = undefined,
    photoUrl: string | undefined = undefined
  ) {
    await prisma.user.update({
      where: { id },
      data: {
        name,
        photoUrl
      }
    })

    return true
  }

  async updatePassword(
    id: string,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!(await bcryptjs.compare(oldPassword, user?.password!))) {
      throw new GraphQLError("Senha incorreta!")
    }

    await prisma.user.update({
      where: { id },
      data: {
        password: await bcryptjs.hash(newPassword, 12)
      }
    })

    return true
  }

  async createFiltro(userId: string, name: string, busca: string) {
    const filtro = await prisma.busca.create({
      data: {
        name,
        userId,
        busca: JSON.parse(busca)
      }
    })

    return filtro.id
  }

  async deleteFiltro(userId: string, id: string) {
    await prisma.busca.delete({
      where: {
        id,
        userId
      }
    })

    return true
  }

  async buscas(userId: string) {
    const buscas = await prisma.busca.findMany({
      where: { userId }
    })

    return buscas.map(busca => ({
      id: busca.id,
      name: busca.name,
      busca: JSON.stringify(busca.busca)
    }))
  }

  async updateProfilePicture(userId: string, photoUrl: string) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        photoUrl
      }
    })

    return true
  }
}
