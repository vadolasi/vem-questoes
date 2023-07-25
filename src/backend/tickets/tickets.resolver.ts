import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { TicketsService } from "./tickets.service"
import { Ticket, TicketType } from "./models/ticket.model"
import { CurrentUserID } from "../auth"

@Service()
@Resolver()
export class TicketsResolver {
  constructor(
    private readonly ticketsService: TicketsService
  ) {}

  @Query(() => [Ticket], { nullable: true })
  @Authorized()
  async openedRickets() {
    return this.ticketsService.getOpened()
  }

  @Mutation(returns => Ticket)
  @Authorized()
  async addTicket(
    @CurrentUserID() userId: string,
    @Arg("content") content: string,
    @Arg("type") role: TicketType,
    @Arg("question", { nullable: true }) questionId: string
  ) {
    return await this.ticketsService.create(userId, content, role)
  }

  @Mutation(returns => Boolean)
  @Authorized()
  async resolveTicket(
    @Arg("id") userId: string
  ) {
    return await this.ticketsService.delete(userId)
  }
}
