/*
  Warnings:

  - You are about to drop the column `areaId` on the `Subarea` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ErrorClassification" AS ENUM ('CERTEZA', 'ATENCAO', 'INCERTEZA');

-- DropForeignKey
ALTER TABLE "Subarea" DROP CONSTRAINT "Subarea_areaId_fkey";

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdById" TEXT;

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "motivo" "ErrorClassification";

-- AlterTable
ALTER TABLE "Simulado" ADD COLUMN     "sequence" TEXT;

-- AlterTable
ALTER TABLE "Subarea" DROP COLUMN "areaId";

-- CreateTable
CREATE TABLE "DashboardImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "DashboardImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area_Subarea" (
    "id" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "subareaId" TEXT NOT NULL,

    CONSTRAINT "Area_Subarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnostico_Question" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "diagnosticoId" TEXT NOT NULL,

    CONSTRAINT "Diagnostico_Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnostico" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Diagnostico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagnostico_name_key" ON "Diagnostico"("name");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Area_Subarea" ADD CONSTRAINT "Area_Subarea_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Area_Subarea" ADD CONSTRAINT "Area_Subarea_subareaId_fkey" FOREIGN KEY ("subareaId") REFERENCES "Subarea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostico_Question" ADD CONSTRAINT "Diagnostico_Question_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostico_Question" ADD CONSTRAINT "Diagnostico_Question_diagnosticoId_fkey" FOREIGN KEY ("diagnosticoId") REFERENCES "Diagnostico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
