import { PrismaClient } from "@prisma/client"
import { join } from "path"
import xlsx from "xlsx"

const prisma = new PrismaClient()

function extractQuestions(text: string) {
  const matchTextRegex = new RegExp("^(.*?)(?=\\s*[A-E]\\))", "gms")
  const matchText = matchTextRegex.exec(text)

  if (!matchText) {
    return null
  }

  const replaceText = text.replace(matchText[0], "")
  const matchesRegex = new RegExp("^([A-E])\\)\\s*(.*?)\\s*(?=\\n[A-E]\\)|\\n*$)", "gms")
  const matches = replaceText.matchAll(matchesRegex)

  const questions: { [key: string]: string } = {}
  for (const match of matches) {
    const option = match[1]
    const question = match[2].replace(/_x000D_/g, "").trim()
    questions[option] = question
  }

  return {
    text: matchText[0].trim().replace(/_x000D_/g, ""),
    questions: questions
  }
}

async function main() {
  const workbook = xlsx.readFile(join(__dirname, "./questions.xlsm"))

  const questions = xlsx.utils.sheet_to_json(workbook.Sheets["BANCO DE QUESTÃO"]) as any[]

  for (const question of questions) {
    const result = extractQuestions(question["[TEXTO DE SUPORTE]"])

    if (!result) {
      continue
    }

    const { text: enunciado, questions } = result

    for (const key in Object.keys(questions)) {
      if (question[key] === undefined) continue
      question[key] = questions[key].replace(/_x000D_/g, "").trim()
    }

    await prisma.question.create({
      // @ts-ignore
      data: {
        enunciado,
        alternatives: {
          create: Object.entries(questions).map(([option, text]) => ({
            text,
            letter: option,
            correct: option === question["RESPOSTA"]
          }))
        },
        processoSeletivo: question["PROCESSO SELETIVO"] ? {
          connectOrCreate: {
            where: { name: question["PROCESSO SELETIVO"] },
            create: { name: question["PROCESSO SELETIVO"] }
          }
        } : undefined,
        ano: question["ANO"] ? {
          connectOrCreate: {
            where: { ano: parseInt(question["ANO"]) },
            create: { ano: parseInt(question["ANO"]) }
          }
        } : undefined,
        local: question["LOCAL"] ? {
          connectOrCreate: {
            where: { name: question["LOCAL"] },
            create: { name: question["LOCAL"] }
          }
        } : undefined,
        perfil: question["PERFIL"] ? {
          connectOrCreate: {
            where: { name: question["PERFIL"] },
            create: { name: question["PERFIL"] }
          }
        } : undefined,
        area: question["ÁREA"] ? {
          connectOrCreate: {
            where: { name: question["ÁREA"] },
            create: { name: question["ÁREA"] }
          }
        } : undefined,
        subarea: question["SUBÁREA"] ? {
          connectOrCreate: {
            where: { name: question["SUBÁREA"] },
            create: { name: question["SUBÁREA"] }
          }
        } : undefined,
        estado: question["ESTADO"] ? {
          connectOrCreate: {
            where: { name: question["ESTADO"] },
            create: { name: question["ESTADO"] }
          }
        } : undefined,
        banca: question["BANCA"] ? {
          connectOrCreate: {
            where: { name: question["BANCA"] },
            create: { name: question["BANCA"] }
          }
        } : undefined
      }
    })
  }
}

main()
  .then(() => process.exit())
  .catch()
