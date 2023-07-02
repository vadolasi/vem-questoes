import { Service } from "typedi"
import { PrismaService } from "../prisma"
import { TicketType } from "./models/ticket.model"

@Service()
export class TicketsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getById(id: string) {
    return this.prisma.ticket.findUnique({
      where: { id }
    })
  }

  async getOpened() {
    return this.prisma.ticket.findMany({
      where: { status: "OPEN" }
    })
  }

  async delete(id: string) {
    await this.prisma.ticket.delete({ where: { id } })
    return true
  }

  async create(
    userId: string,
    title: string,
    content: string,
    type: TicketType,
    questionId?: string
  ) {
    return await this.prisma.ticket.create({
      data: {
        title,
        content,
        type: TicketType[type] as keyof typeof TicketType,
        userId,
        questionId
      }
    })
  }
}
