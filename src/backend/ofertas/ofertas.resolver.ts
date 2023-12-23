import { Authorized, Mutation, Resolver } from "type-graphql"
import { Service } from "typedi"
import { OfertasService } from "./ofertas.service"
import MercadoPagoConfig, { PreApprovalPlan } from "mercadopago"

@Service()
@Resolver()
export class TicketsResolver {
  constructor(
    private readonly ofertasService: OfertasService
  ) {}

  @Mutation(() => Boolean)
  @Authorized()
  async createOferta() {
    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN! })
    const plan = new PreApprovalPlan(client)
    await plan.create({
      body: {
        reason: "Oferta"
      }
    })
  }

  @Mutation(() => Boolean)
  @Authorized()
  async updateOferta() {
    return true
  }

  @Mutation(() => Boolean)
  @Authorized()
  async deleteOferta() {
    return true
  }
}
