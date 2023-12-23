import prisma from "@/lib/prisma"
import MercadoPagoConfig, { PreApprovalPlan, PreApproval } from "mercadopago"
import { Service } from "typedi"

@Service()
export class OfertasService {
  constructor() {}

  async createOferta(name: string, price: number, frequency_type: string, frequency: number) {
    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN! })
    const plan = new PreApprovalPlan(client)

    await plan.create({
      body: {
        reason: `Vem Questões - ${name}`,
        auto_recurring: {
          frequency,
          frequency_type,
          transaction_amount: price,
          currency_id: "BRL"
        }
      }
    })

    await prisma.oferta.create({
      data: {
        name,
        preco: price
      }
    })
  }

  async comprarOferta(id: string, userId: string) {
    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN! })
    const approval = new PreApproval(client)
    const oferta = await prisma.oferta.findUnique({ where: { id } })
    const user = await prisma.user.findUnique({ where: { id: userId } })

    await approval.create({
      body: {
        preapproval_plan_id: oferta!.preapproval_plan_id
      }
    })
  }
}
