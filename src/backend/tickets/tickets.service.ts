import { Service } from "typedi"
import prisma from "../../lib/prisma"
import { TicketType } from "./models/ticket.model"

@Service()
export class TicketsService {
  constructor() {}

  async getById(id: string) {
    return prisma.ticket.findUnique({
      where: { id }
    })
  }

  async getOpened() {
    return prisma.ticket.findMany({
      where: { status: "OPEN" }
    })
  }

  async delete(id: string) {
    await prisma.ticket.delete({ where: { id } })
    return true
  }

  async create(
    userId: string,
    content: string,
    type: TicketType,
    questionId?: string
  ) {
    return await prisma.ticket.create({
      data: {
        content,
        type: TicketType[type] as keyof typeof TicketType,
        userId,
        questionId
      }
    })
  }
}
