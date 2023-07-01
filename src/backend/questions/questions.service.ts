import { Service } from "typedi"
import { PrismaService } from "../prisma"
import { SimuladoType } from "./models/simulado.model"
import { Alternative } from "@prisma/client"
import { GraphQLError } from "graphql"

function getRandomEntries(arr: any[], n: number) {
  if (n >= arr.length) {
    return arr
  }

  const shuffled = arr.slice()
  let currentIndex = arr.length
  let temporaryValue, randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    temporaryValue = shuffled[currentIndex]
    shuffled[currentIndex] = shuffled[randomIndex]
    shuffled[randomIndex] = temporaryValue
  }

  return shuffled.slice(0, n)
}

function getRandomItem(arr: any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length)

  const item = arr[randomIndex]

  return item
}

@Service()
export class QuestionsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async getProcessosSeletivos() {
    return this.prisma.processoSeletivo.findMany()
  }

  async getAnos() {
    return this.prisma.ano.findMany()
  }

  async getLocais() {
    return this.prisma.local.findMany()
  }

  async getPerfis() {
    return this.prisma.perfil.findMany()
  }

  async getAreas() {
    return this.prisma.area.findMany()
  }

  async getSubareas() {
    return this.prisma.subarea.findMany()
  }

  async getEstados() {
    return this.prisma.estado.findMany()
  }

  async getBancas() {
    return this.prisma.banca.findMany()
  }

  async getQuestions(
    userId: string,
    page: number,
    itemsPerPage: number,
    requestedFields: string[],
    text?: string,
    processoSeletivoIds?: string[],
    anoIds?: string[],
    localIds?: string[],
    perfilIds?: string[],
    areaIds?: string[],
    subareaIds?: string[],
    estadoIds?: string[],
    bancaIds?: string[],
    apenasNaoRespondidas?: boolean,
    apenasRespondidas?: boolean,
    apenasRespondidasCertas?: boolean,
    apenasRespondidasErradas?: boolean
  ) {
     const quantity = await this.prisma.question.count({
      where: {
        OR: [
          {
            enunciado: {
              contains: text
            }
          },
          {
            alternatives: {
              some: {
                text: {
                  contains: text
                }
              }
            }
          }
        ],
        processoSeletivoId: (processoSeletivoIds?.length || 0) > 0 ? {
          in: processoSeletivoIds
        } : undefined,
        anoId: (anoIds?.length || 0) > 0 ? {
          in: anoIds
        } : undefined,
        localId: (localIds?.length || 0) > 0 ? {
          in: localIds
        }: undefined,
        perfilId: (perfilIds?.length || 0) > 0 ? {
          in: perfilIds
        } : undefined,
        areaId: (areaIds?.length || 0) > 0 ? {
          in: areaIds
        }: undefined,
        subareaId: (subareaIds?.length || 0) > 0 ? {
          in: subareaIds
        }: undefined,
        estadoId: (estadoIds?.length || 0) > 0 ? {
          in: estadoIds
        } : undefined,
        bancaId: (bancaIds?.length || 0) > 0 ? {
          in: bancaIds
        }: undefined,
      }
    })

    const questions = await this.prisma.question.findMany({
      where: {
        OR: text ? [
          {
            enunciado: {
              contains: text
            }
          },
          {
            alternatives: {
              some: {
                text: {
                  contains: text
                }
              }
            }
          }
        ] : undefined,
        processoSeletivoId: (processoSeletivoIds?.length || 0) > 0 ? {
          in: processoSeletivoIds
        } : undefined,
        anoId: (anoIds?.length || 0) > 0 ? {
          in: anoIds
        } : undefined,
        localId: (localIds?.length || 0) > 0 ? {
          in: localIds
        }: undefined,
        perfilId: (perfilIds?.length || 0) > 0 ? {
          in: perfilIds
        } : undefined,
        areaId: (areaIds?.length || 0) > 0 ? {
          in: areaIds
        }: undefined,
        subareaId: (subareaIds?.length || 0) > 0 ? {
          in: subareaIds
        }: undefined,
        estadoId: (estadoIds?.length || 0) > 0 ? {
          in: estadoIds
        } : undefined,
        bancaId: (bancaIds?.length || 0) > 0 ? {
          in: bancaIds
        }: undefined,
        responses: apenasRespondidas || apenasNaoRespondidas ? {
          some: {
            userId: apenasRespondidas || apenasRespondidasCertas || apenasRespondidasErradas ? userId : undefined,
            correct: apenasRespondidasCertas || apenasRespondidasErradas ? apenasRespondidasCertas : undefined
          },
          none: {
            userId: apenasNaoRespondidas ? userId : undefined
          }
        } : undefined
      },
      include: {
        processoSeletivo: requestedFields.includes("processoSeletivo"),
        alternatives: requestedFields.includes("alternatives"),
        ano: requestedFields.includes("ano"),
        local: requestedFields.includes("local"),
        perfil: requestedFields.includes("perfil"),
        area: requestedFields.includes("area"),
        subarea: requestedFields.includes("subarea"),
        estado: requestedFields.includes("estado"),
        banca: requestedFields.includes("banca"),
        comments: requestedFields.includes("comments")
      },
      skip: itemsPerPage * (page - 1),
      take: itemsPerPage
    })

    return { quantity, pagesQuantity: Math.ceil(quantity / itemsPerPage), questions }
  }

  async getQuestion(questionId: string, requestedFields: string[]) {
    return await this.prisma.question.findFirst({
      where: {
        id: questionId
      },
      include: {
        processoSeletivo: requestedFields.includes("processoSeletivo"),
        alternatives: requestedFields.includes("alternatives"),
        ano: requestedFields.includes("ano"),
        local: requestedFields.includes("local"),
        perfil: requestedFields.includes("perfil"),
        area: requestedFields.includes("area"),
        subarea: requestedFields.includes("subarea"),
        estado: requestedFields.includes("estado"),
        banca: requestedFields.includes("banca"),
        comments: {
          include: {
            user: true
          }
        }
      }
    })
  }

  async resolveQuestion(userId: string, questionId: string, alternativeId: string, simuladoId?: string) {
    const alternative = await this.prisma.alternative.findUnique({
      where: {
        id: alternativeId
      }
    })

    let correctAlternative: Alternative

    if (!alternative?.correct) {
      correctAlternative = (await this.prisma.alternative.findFirst({ where: { questionId, correct: true } }))!
    } else {
      correctAlternative = alternative
    }

    if (!alternative) {
      throw new GraphQLError("Alternative not found")
    }

    await this.prisma.response.create({
      data: {
        userId,
        questionId,
        alternativeId,
        correct: alternative.correct,
        simuladoId
      }
    })

    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        totalQuestions: {
          increment: 1
        },
        totalCorrect: {
          increment: alternative.correct ? 1 : 0
        }
      }
    })

    return { correct: alternative.correct, correctAlternative: correctAlternative.id }
  }

  async addComment(userId: string, questionId: string, content: string) {
    await this.prisma.comment.create({
      data: {
        userId,
        questionId,
        content
      }
    })

    return true
  }

  async addNotebook(userId: string, name: string, questions: string[], description?: string) {
    return await this.prisma.notebook.create({
      data: {
        userId,
        name,
        description,
        questions: {
          connect: questions.map(questionId => ({ id: questionId }))
        }
      },
      include: { questions: true }
    })
  }

  async updateNotebook(userId: string, notebookId: string, name?: string, description?: string, questions?: string[]) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found!")
    }

    await this.prisma.notebook.update({
      where: { id: notebookId },
      data: {
        name: {
          set: name
        },
        description: {
          set: description
        },
        questions: {
          set: questions?.map(questionId => ({ id: questionId }))
        }
      }
    })
  }

  async deleteNotebook(userId: string, id: string) {
    await this.prisma.notebook.deleteMany({ where: { id, userId } })

    return true
  }

  async getNotebooks(userId: string) {
    return await this.prisma.notebook.findMany({ where: { userId }, include: { questions: { include: { alternatives: true } } } })
  }

  async getNotebook(userId: string, notebookId: string) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return notebook
  }

  async addQuestionToNotebook(userId: string, notebookId: string, questionId: string) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return await this.prisma.notebook.update({
      where: {
        id: notebookId
      },
      data: {
        questions: {
          connect: {
            id: questionId
          }
        }
      }
    })
  }

  async removeQuestionFromNotebook(userId: string, notebookId: string, questionId: string) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return await this.prisma.notebook.update({
      where: {
        id: notebookId
      },
      data: {
        questions: {
          disconnect: {
            id: questionId
          }
        }
      }
    })
  }

  async simulados(page: number, itemsPerPage: number, userId: string) {
    const quantity = await this.prisma.simulado.count({ where: { userId } })

    const simulados = await this.prisma.simulado.findMany({
      where: { userId },
      include: { questions: { include: { alternatives: true } } },
      skip: itemsPerPage * (page - 1),
      take: itemsPerPage
    })

    return { simulados, pagesQuantity: Math.ceil(quantity / itemsPerPage) }
  }

  async simulado(id: string, userId: string) {
    const simulado = await this.prisma.simulado.findFirst({
      where: { id, userId },
      include: { questions: { include: { alternatives: true, ano: true, banca: true, processoSeletivo: true } } }
    })

    if (!simulado) {
      throw new GraphQLError("Simulado not found!")
    }

    return simulado
  }

  async createSimulado(userId: string, name: string, type: SimuladoType, areas?: { areaId: string, quantity: number }[]) {
    if (type === SimuladoType.Custom && areas) {
      const totalQuestions = areas?.reduce((counter, area) => area.quantity + counter, 0)!
      const totalMinutes = totalQuestions * 3

      return await this.prisma.simulado.create({
        data: {
          userId,
          name,
          totalQuestions,
          totalMinutes,
          questions: {
            connect: (await Promise.all(areas.map(async ({ areaId, quantity }) => {
              const questions = await this.prisma.question.findMany({
                where: {
                  areaId
                },
                select: { id: true }
              })

              return getRandomEntries(questions, quantity)
            }))).flat()
          }
        },
        include: { questions: { include: { alternatives: true } } }
      })
    } else {
      const questions = await this.prisma.question.findMany({ select: { id: true } })

      const quantites = [10, 15, 20, 25, 30]
      const quantity = getRandomItem(quantites)
      const totalMinutes = quantity * 3

      return await this.prisma.simulado.create({
        data: {
          userId,
          name,
          totalQuestions: quantity,
          totalMinutes,
          questions: {
            connect: getRandomEntries(questions, quantity)
          }
        },
        include: { questions: { include: { alternatives: true } } }
      })
    }
  }

  async relatorioDeDesempenho(userId: string) {
    const responses = await this.prisma.response.findMany({
      where: { userId }
    })

    const total: { [key: string]: number } = {}
    const corrects: { [key: string]: number } = {}

    for (const response of responses) {
      const date = response.date.toISOString().split("T")[0].split("-").reverse().join("/")

      if (!Object.keys(total).includes(date)) {
        total[date] = 0
        corrects[date] = 0
      }

      total[date] += 1

      if (response.correct) {
        corrects[date] += 1
      }
    }

    const result: { date: string, total: number, totalCorrect: number }[] = []

    for (const key of Object.keys(total)) {
      result.push({ date: key, total: total[key], totalCorrect: corrects[key] })
    }

    return result
  }
}
