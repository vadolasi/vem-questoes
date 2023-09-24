/*
  Warnings:

  - Added the required column `name` to the `Busca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Busca" ADD COLUMN     "name" TEXT NOT NULL;
