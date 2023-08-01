import { Field, InputType } from "type-graphql"

@InputType()
export class CreateQuestionInput {
  @Field()
  enunciado: string

  @Field(_type => [String])
  alternatives: string[]

  @Field()
  correct: number

  @Field({ nullable: true })
  processoSeletivoId?: string

  @Field({ nullable: true })
  newProcessoSeletivo?: string

  @Field({ nullable: true })
  anoId?: string

  @Field({ nullable: true })
  newAno?: number

  @Field({ nullable: true })
  localId?: string

  @Field({ nullable: true })
  newLocal?: string

  @Field({ nullable: true })
  perfilId?: string

  @Field({ nullable: true })
  newPerfil?: string

  @Field({ nullable: true })
  areaId?: string

  @Field({ nullable: true })
  newArea?: string

  @Field({ nullable: true })
  subAreaId?: string

  @Field({ nullable: true })
  newSubArea?: string

  @Field({ nullable: true })
  estadoId?: string

  @Field({ nullable: true })
  newEstado?: string

  @Field({ nullable: true })
  bancaId?: string

  @Field({ nullable: true })
  newBanca?: string
}
