import prisma from "../src/lib/prisma"
import bcryptjs from "bcryptjs"
import { Role } from "@prisma/client"

async function main() {
  await prisma.user.create({
    data: {
      email: process.argv[2],
      password: await bcryptjs.hash(process.argv[3], 12),
      role: Role.ADMIN,
      name: process.argv[4],
      totalCorrect: 0,
      totalQuestions: 0
    }
  })
}

main()
