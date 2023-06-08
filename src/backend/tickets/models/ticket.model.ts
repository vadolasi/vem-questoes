import { Question } from "@/backend/questions/models/question.model"
import { User } from "@/backend/users/models/user.model"
import { ObjectType, Field, ID } from "type-graphql"
import { registerEnumType } from "type-graphql"

export enum TicketType {
  BUG,
  FEATURE,
  QUESTION,
  OTHER
}

export enum TicketStatus {
  OPEN,
  IN_PROGRESS,
  DONE
}

registerEnumType(TicketStatus, { name: "TicketStatus" })
registerEnumType(TicketType, { name: "TicketType" })

@ObjectType()
export class Ticket {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field()
  content: string

  @Field(type => TicketType)
  role: TicketType

  @Field(type => User)
  name: User

  @Field(type => Date)
  createdAt: Date

  @Field(type => Question)
  question: Question
}
