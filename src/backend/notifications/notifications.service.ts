import { Service } from "typedi"
import prisma from "../../lib/prisma"

@Service()
export class NotificationsService {
  constructor() {}

  async createNotification(title: string, body: string) {
    return await prisma.notification.create({
      data: {
        title,
        body
      }
    })
  }

  async getUnreadNotifications(userId: string) {
    return prisma.notification.findMany({
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
    await prisma.notificationToUser.createMany({
      data: notificationsIds.map(notificationId => ({
        notificationId,
        userId
      }))
    })

    return true
  }
}
