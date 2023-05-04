-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alternative" (
    "id" STRING NOT NULL,
    "letter" STRING NOT NULL,
    "correct" BOOL NOT NULL,
    "questionId" STRING NOT NULL,

    CONSTRAINT "Alternative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" STRING NOT NULL,
    "enunciado" STRING NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Alternative" ADD CONSTRAINT "Alternative_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
