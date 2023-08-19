import prisma from "../src/lib/prisma"
import { join } from "path"
import * as xlsx from "xlsx"

function extractQuestions(text: string) {
  const matchesRegex = new RegExp("(?:^|\\n)([A-E])\\)\\s*(.*?)(?=\\n[A-E]\\)|\\n*$)", "gms")
  const matches = text.matchAll(matchesRegex)

  const questions: { [key: string]: string } = {}
  let previousOption = "a"

  for (const match of matches) {
    const option = match[1]
    const question = match[2].replace(/_x000D_/g, "").trim()

    if (!isNextOption(previousOption, option)) {
      previousOption = nextOption(previousOption)
    }

    questions[previousOption] = question
    previousOption = nextOption(previousOption)
  }

  return {
    text: text.replace(/_x000D_/g, ""),
    questions: questions
  }
}

function isNextOption(previous: string, current: string): boolean {
  return current.charCodeAt(0) === previous.charCodeAt(0) + 1
}

function nextOption(option: string): string {
  return String.fromCharCode(option.charCodeAt(0) + 1)
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
