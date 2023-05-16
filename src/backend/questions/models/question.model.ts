import { Field, ID, ObjectType } from "type-graphql"
import { Alternative } from "./alternatives.model"
import { Ano } from "./ano.model"
import { Local } from "./local.model"
import { Perfil } from "./perfil.model"
import { Area } from "./area.model"
import { Subarea } from "./subarea.model"
import { Estado } from "./estado.model"
import { Banca } from "./banca.model"

@ObjectType()
export class Question {
  @Field(() => ID)
  id: string

  @Field()
  enunciado: string

  @Field(() => [Alternative], { nullable: true })
  alternatives?: Alternative[]

  @Field(() => Ano, { nullable: true })
  ano?: Ano

  @Field(() => Local, { nullable: true })
  local?: Local

  @Field(() => Perfil, { nullable: true })
  perfil?: Perfil

  @Field(() => Area, { nullable: true })
  area?: Area

  @Field(() => Subarea, { nullable: true })
  subarea?: Subarea

  @Field(() => Estado, { nullable: true })
  estado?: Estado

  @Field(() => Banca, { nullable: true })
  banca?: Banca
}
