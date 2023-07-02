import { Service } from "typedi"
import { PrismaService } from "../prisma"

@Service()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async createNotification(title: string, body: string) {
    return await this.prisma.notification.create({
      data: {
        title,
        body
      }
    })
  }

  async getUnreadNotifications(userId: string) {
    return this.prisma.notification.findMany({
      where: {
        users: {
          none: {
            userId
          }
        }
      }
    })
  }

  async readNotifications(userId: string, notificationsIds: string[]) {
    await this.prisma.notificationToUser.createMany({
      data: notificationsIds.map(notificationId => ({
        notificationId,
        userId
      }))
    })

    return true
  }
}
