-- AlterTable
ALTER TABLE "Subarea" ADD COLUMN     "areaId" TEXT;

-- AddForeignKey
ALTER TABLE "Subarea" ADD CONSTRAINT "Subarea_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;
