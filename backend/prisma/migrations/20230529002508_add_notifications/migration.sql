-- CreateTable
CREATE TABLE "Notification" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "body" STRING NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationToUser" (
    "id" STRING NOT NULL,
    "notificationId" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "NotificationToUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotificationToUser" ADD CONSTRAINT "NotificationToUser_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationToUser" ADD CONSTRAINT "NotificationToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
