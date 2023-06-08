-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_questionId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "questionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
