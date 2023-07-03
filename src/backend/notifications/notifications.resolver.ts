import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { NotificationsService } from "./notifications.service"
import { Notification } from "./models/notification.model"
import { CurrentUserID } from "../auth"

@Resolver()
@Service()
export class NotificationsResolver {
  constructor(
    private readonly notificationsService: NotificationsService
  ) {}

  @Mutation(returns => Notification)
  @Authorized()
  async createNotification(
    @Arg("title") title: string,
    @Arg("body") body: string
  ) {
    return await this.notificationsService.createNotification(title, body)
  }

  @Query(returns => [Notification])
  async notifications(
    @CurrentUserID() userId: string
  ) {
    return await this.notificationsService.getUnreadNotifications(userId)
  }

  @Mutation(returns => Boolean)
  async readNotifications(
    @CurrentUserID() userId: string,
    @Arg("notificationIds", () => [String]) notificationIds: string[]
  ) {
    return await this.notificationsService.readNotifications(userId, notificationIds)
  }
}
