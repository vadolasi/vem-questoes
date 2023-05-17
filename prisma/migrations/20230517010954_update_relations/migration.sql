/*
  Warnings:

  - You are about to drop the `QuestionToNotebook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuestionToNotebook" DROP CONSTRAINT "QuestionToNotebook_notebookId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionToNotebook" DROP CONSTRAINT "QuestionToNotebook_questionId_fkey";

-- DropTable
DROP TABLE "QuestionToNotebook";

-- CreateTable
CREATE TABLE "_QuestionToSimulado" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_NotebookToQuestion" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionToSimulado_AB_unique" ON "_QuestionToSimulado"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionToSimulado_B_index" ON "_QuestionToSimulado"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NotebookToQuestion_AB_unique" ON "_NotebookToQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_NotebookToQuestion_B_index" ON "_NotebookToQuestion"("B");

-- AddForeignKey
ALTER TABLE "_QuestionToSimulado" ADD CONSTRAINT "_QuestionToSimulado_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSimulado" ADD CONSTRAINT "_QuestionToSimulado_B_fkey" FOREIGN KEY ("B") REFERENCES "Simulado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotebookToQuestion" ADD CONSTRAINT "_NotebookToQuestion_A_fkey" FOREIGN KEY ("A") REFERENCES "Notebook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotebookToQuestion" ADD CONSTRAINT "_NotebookToQuestion_B_fkey" FOREIGN KEY ("B") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
