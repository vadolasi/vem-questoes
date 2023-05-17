/*
  Warnings:

  - Added the required column `alternativeId` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Made the column `correct` on table `Response` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_simuladoId_fkey";

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "alternativeId" STRING NOT NULL;
ALTER TABLE "Response" ALTER COLUMN "simuladoId" DROP NOT NULL;
ALTER TABLE "Response" ALTER COLUMN "correct" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_alternativeId_fkey" FOREIGN KEY ("alternativeId") REFERENCES "Alternative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_simuladoId_fkey" FOREIGN KEY ("simuladoId") REFERENCES "Simulado"("id") ON DELETE SET NULL ON UPDATE CASCADE;
