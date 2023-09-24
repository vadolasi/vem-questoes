-- CreateTable
CREATE TABLE "Busca" (
    "id" TEXT NOT NULL,
    "busca" JSONB NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Busca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Busca" ADD CONSTRAINT "Busca_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
