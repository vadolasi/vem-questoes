import { Resolver } from "type-graphql"
import { Service } from "typedi"
import { OfertasService } from "./ofertas.service"

@Service()
@Resolver()
export class TicketsResolver {
  constructor(
    private readonly ofertasService: OfertasService
  ) {}
}
