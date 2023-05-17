/*
  Warnings:

  - You are about to drop the column `comment` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "comment";
ALTER TABLE "Comment" ADD COLUMN     "content" STRING NOT NULL;
