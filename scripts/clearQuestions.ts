import prisma from "../src/lib/prisma"

async function main() {
  await prisma.question.deleteMany()
}

main()
