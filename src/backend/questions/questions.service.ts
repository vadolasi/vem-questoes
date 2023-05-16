import { Service } from "typedi"
import { PrismaService } from "../prisma"

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
    requestedFields: string[],
    text?: string,
    processoSeletivoId?: string,
    anoId?: string,
    localId?: string,
    perfilId?: string,
    areaId?: string,
    subareaId?: string,
    estadoId?: string,
    bancaId?: string
  ) {
    return await this.prisma.question.findMany({
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

  async resolveQuestion(userId: string, questionId: string, alternativeId: string) {
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
        correct: alternative.correct
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

  async addNotebook(userId: string, name: string, questions: string[]) {
    await this.prisma.notebook.create({
      data: {
        userId,
        name,
        questions: {
          connect: questions.map(questionId => ({ id: questionId }))
        }
      }
    })
  }

  async updateNotebook(userId: string, notebookId: string, name?: string, questions?: string[]) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new Error("Notebook not found!")
    }

    await this.prisma.notebook.update({
      where: { id: notebookId },
      data: {
        name,
        questions: {
          set: questions?.map(questionId => ({ id: questionId }))
        }
      }
    })
  }

  async getNotebooks(userId: string) {
    return await this.prisma.notebook.findMany({ where: { userId } })
  }

  async getNotebook(userId: string, notebookId: string) {
    const notebook = await this.prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new Error("Notebook not found")
    }

    return notebook
  }
}
