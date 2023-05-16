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
    processoSeletivoId?: string,
    anoId?: string,
    localId?: string,
    perfilId?: string,
    areaId?: string,
    subareaId?: string,
    estadoId?: string,
    bancaId?: string
  ) {
    return this.prisma.question.findMany({
      where: {
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
        alternatives: "alternatives" in requestedFields,
        ano: "ano" in requestedFields,
        local: "local" in requestedFields,
        perfil: "perfil" in requestedFields,
        area: "area" in requestedFields,
        subarea: "subarea" in requestedFields,
        estado: "estado" in requestedFields,
        banca: "banca" in requestedFields
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
}
