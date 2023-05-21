import { Service } from "typedi"
import { PrismaService } from "../prisma"
import { SimuladoType } from "./models/simulado.model"

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
    processoSeletivoId?: string,
    anoId?: string,
    localId?: string,
    perfilId?: string,
    areaId?: string,
    subareaId?: string,
    estadoId?: string,
    bancaId?: string,
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
        processoSeletivoId,
        anoId,
        localId,
        perfilId,
        areaId,
        subareaId,
        estadoId,
        bancaId
      }
    })

    const questions = await this.prisma.question.findMany({
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
        processoSeletivoId,
        anoId,
        localId,
        perfilId,
        areaId,
        subareaId,
        estadoId,
        bancaId,
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
        comments: requestedFields.includes("comments")
      }
    })
  }

  async resolveQuestion(userId: string, questionId: string, alternativeId: string, simuladoId: string) {
    const alternative = await this.prisma.alternative.findUnique({
      where: {
        id: alternativeId
      }
    })

    if (!alternative) {
      throw new Error("Alternative not found")
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

    return alternative.correct
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
      throw new Error("Notebook not found!")
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
      throw new Error("Notebook not found")
    }

    return notebook
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
}
