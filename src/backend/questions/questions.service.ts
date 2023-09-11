import { Service } from "typedi"
import prisma from "../../lib/prisma"
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
  constructor() {}

  async getProcessosSeletivos() {
    return prisma.processoSeletivo.findMany()
  }

  async getAnos() {
    return prisma.ano.findMany()
  }

  async getLocais() {
    return prisma.local.findMany()
  }

  async getPerfis() {
    return prisma.perfil.findMany()
  }

  async getAreas() {
    const areas = await prisma.area.findMany({ include: { _count: { select: { questions: true } } } })

    return areas.map(area => ({
      id: area.id,
      name: area.name,
      count: area._count.questions
    }))
  }

  async getSubareas() {
    return prisma.subarea.findMany()
  }

  async getEstados() {
    return prisma.estado.findMany()
  }

  async getBancas() {
    return prisma.banca.findMany()
  }

  async createQuestion({
    enunciado,
    alternatives,
    correct,
    processoSeletivo,
    ano,
    local,
    perfil,
    area,
    subarea,
    estado,
    banca
  }: {
    enunciado: string,
    alternatives: string[],
    correct: number,
    processoSeletivo: {
      id?: string,
      new?: {
        name: string
      }
    },
    ano: {
      id?: string,
      new?: {
        ano: number
      }
    },
    local: {
      id?: string,
      new?: {
        name: string
      }
    },
    perfil: {
      id?: string,
      new?: {
        name: string
      }
    },
    area: {
      id?: string,
      new?: {
        name: string
      }
    },
    subarea: {
      id?: string,
      new?: {
        name: string
      }
    },
    estado: {
      id?: string,
      new?: {
        name: string
      }
    },
    banca: {
      id?: string,
      new?: {
        name: string
      }
    }
  }) {
    const question = await prisma.question.create({
      data: {
        enunciado,
        processoSeletivo: {
          connectOrCreate: {
            create: {
              name: processoSeletivo.new?.name!
            },
            where: {
              id: processoSeletivo.id
            }
          }
        },
        ano: {
          connectOrCreate: {
            create: {
              ano: ano.new?.ano!
            },
            where: {
              id: ano.id
            }
          }
        },
        local: {
          connectOrCreate: {
            create: {
              name: local.new?.name!
            },
            where: {
              id: local.id
            }
          }
        },
        perfil: {
          connectOrCreate: {
            create: {
              name: perfil.new?.name!
            },
            where: {
              id: perfil.id
            }
          }
        },
        area: {
          connectOrCreate: {
            create: {
              name: area.new?.name!
            },
            where: {
              id: area.id
            }
          }
        },
        subarea: {
          connectOrCreate: {
            create: {
              name: subarea.new?.name!
            },
            where: {
              id: subarea.id
            }
          }
        },
        estado: {
          connectOrCreate: {
            create: {
              name: estado.new?.name!
            },
            where: {
              id: estado.id
            }
          }
        },
        banca: {
          connectOrCreate: {
            create: {
              name: banca.new?.name!
            },
            where: {
              id: banca.id
            }
          }
        },
        alternatives: {
          create: alternatives.map((alternative, index) => ({
            text: alternative,
            correct: index === correct,
            letter: ["A", "B", "C", "D", "E"][index]
          }))
        }
      }
    })

    return question
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
     const quantity = await prisma.question.count({
      where: {
        enunciado: {
          not: {
            search: "^\\s*$"
          }
        },
        alternatives: {
          some: {
            correct: true
          },
          every: {
            NOT: {
              text: {
                search: "^\\s*$"
              }
            }
          }
        },
        OR: [
          {
            enunciado: {
              search: text
            }
          },
          {
            alternatives: {
              some: {
                text: {
                  search: text
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
        }: undefined
      }
    })

    const questions = await prisma.question.findMany({
      where: {
        enunciado: {
          not: {
            search: "^\\s*$"
          }
        },
        alternatives: {
          some: {
            correct: true
          },
          every: {
            NOT: {
              text: {
                search: "^\\s*$"
              }
            }
          }
        },
        NOT: {
          alternatives: {
            none: {}
          }
        },
        OR: text ? [
          {
            enunciado: {
              search: text
            }
          },
          {
            alternatives: {
              some: {
                text: {
                  search: text
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

  async getComments(questionId: string) {
    return await prisma.comment.findMany({ where: { questionId }, include: { user: true } })
  }

  async deleteComment(userId: string, commentId: string) {
    const [user, comment] = await prisma.$transaction([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.comment.findUnique({ where: { id: commentId } })
    ])

    if (!user) {
      throw new GraphQLError("Usuário não encontrado")
    } else if (!comment) {
      throw new GraphQLError("Comentário não encontrado")
    }

    if (comment?.userId === userId || ["DEVELOPER", "ADMIN"].includes(user.role)) {
      await prisma.comment.delete({ where: { id: commentId } })

      return true
    } else {
      throw new GraphQLError("Você não pode deletar este comentário!")
    }
  }

  async editComment(userId: string, commentId: string, content: string) {
    const [user, comment] = await prisma.$transaction([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.comment.findUnique({ where: { id: commentId } })
    ])

    if (!user) {
      throw new GraphQLError("Usuário não encontrado")
    } else if (!comment) {
      throw new GraphQLError("Comentário não encontrado")
    }

    if (comment?.userId === userId || ["DEVELOPER", "ADMIN"].includes(user.role)) {
      await prisma.comment.update({ where: { id: commentId }, data: { content } })

      return true
    } else {
      throw new GraphQLError("Você não pode deletar este comentário!")
    }
  }

  async getQuestion(questionId: string, requestedFields: string[]) {
    return await prisma.question.findFirst({
      where: {
        id: questionId,
        enunciado: {
          not: {
            search: "^\\s*$"
          }
        }
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

  async resolveQuestion(userId: string, questionId: string, alternativeId: string, simuladoId?: string, notebookId?: string) {
    const alternative = await prisma.alternative.findUnique({
      where: {
        id: alternativeId
      }
    })

    let correctAlternative: Alternative

    if (!alternative?.correct) {
      correctAlternative = (await prisma.alternative.findFirst({ where: { questionId, correct: true } }))!
    } else {
      correctAlternative = alternative
    }

    if (!alternative) {
      throw new GraphQLError("Alternative not found")
    }

    await prisma.response.create({
      data: {
        userId,
        questionId,
        alternativeId,
        correct: alternative.correct,
        simuladoId,
        notebookId
      }
    })

    await prisma.user.update({
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
    await prisma.comment.create({
      data: {
        userId,
        questionId,
        content
      }
    })

    return true
  }

  async addNotebook(userId: string, name: string, description?: string) {
    return await prisma.notebook.create({
      data: {
        userId,
        name,
        description
      },
      include: { questions: true }
    })
  }

  async updateNotebook(userId: string, notebookId: string, name?: string, description?: string, questions?: string[]) {
    const notebook = await prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found!")
    }

    await prisma.notebook.update({
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
    await prisma.notebook.deleteMany({ where: { id, userId } })

    return true
  }

  async getNotebooks(userId: string) {
    return await prisma.notebook.findMany({ where: { userId }, include: { questions: { include: { alternatives: true } } } })
  }

  async getNotebook(userId: string, notebookId: string) {
    const notebook = await prisma.notebook.findFirst({
      where: { id: notebookId, userId },
      include: {
        questions: {
          include: {
            alternatives: true,
            ano: true,
            banca: true,
            processoSeletivo: true
          }
        }
      }
    })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return notebook
  }

  async addQuestionToNotebook(userId: string, notebookId: string, questionId: string) {
    const notebook = await prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return await prisma.notebook.update({
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
    const notebook = await prisma.notebook.findFirst({ where: { id: notebookId, userId } })

    if (!notebook) {
      throw new GraphQLError("Notebook not found")
    }

    return await prisma.notebook.update({
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
    const quantity = await prisma.simulado.count({ where: { userId } })

    const simulados = await prisma.simulado.findMany({
      where: { userId },
      include: { questions: { include: { alternatives: true } } },
      skip: itemsPerPage * (page - 1),
      take: itemsPerPage
    })

    return { simulados, pagesQuantity: Math.ceil(quantity / itemsPerPage) }
  }

  async simulado(id: string, userId: string) {
    const simulado = await prisma.simulado.findFirst({
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

      return await prisma.simulado.create({
        data: {
          userId,
          name,
          totalQuestions,
          totalMinutes,
          questions: {
            connect: (await Promise.all(areas.map(async ({ areaId, quantity }) => {
              const questions = await prisma.question.findMany({
                where: {
                  areaId,
                  enunciado: {
                    not: {
                      search: "^\\s*$"
                    }
                  },
                  alternatives: {
                    some: {
                      correct: true
                    },
                    every: {
                      NOT: {
                        text: {
                          search: "^\\s*$"
                        }
                      }
                    }
                  },
                  NOT: {
                    alternatives: {
                      none: {}
                    }
                  }
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
      const questions = await prisma.question.findMany({
        where: {
          enunciado: {
            not: {
              search: "^\\s*$"
            }
          },
          alternatives: {
            some: {
              correct: true
            },
            every: {
              NOT: {
                text: {
                  search: "^\\s*$"
                }
              }
            }
          },
          NOT: {
            alternatives: {
              none: {}
            }
          }
        },
        select: { id: true }
      })

      const quantites = [10, 15, 20, 25, 30]
      const quantity = getRandomItem(quantites)
      const totalMinutes = quantity * 3

      return await prisma.simulado.create({
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

  async deleteSimulado(userId: string, id: string) {
    await prisma.simulado.deleteMany({ where: { id, userId } })

    return true
  }

  async updateSimulado(id: string, userId: string, name: string) {
    await prisma.simulado.update({ where: { userId, id }, data: { name } })

    return true
  }

  async mostWrong() {
    const questionsWithAlternatives = await prisma.question.findMany({
      include: {
        alternatives: true
      },
      take: 25
    })

    const dateToFilter = new Date()
    dateToFilter.setMonth(dateToFilter.getMonth() - 1)

    const wrongResponsesCount = await prisma.response.groupBy({
      by: ["questionId", "alternativeId"],
      where: {
        correct: false,
        date: {
          gte: dateToFilter
        }
      },
      _count: {
        _all: true
      }
    })

    const res = questionsWithAlternatives.map(question => {
      let wrongQuantity = 0

      const alternatives = question.alternatives.map(alternative => {
        const alternativeId = alternative.id
        const responseCount = wrongResponsesCount.find(
          (count) =>
            count.questionId === question.id &&
            count.alternativeId === alternativeId
        )
        const wrongResponses =
          responseCount && responseCount._count ? responseCount._count : 0

        const wrong = wrongResponses === 0 ? 0 : wrongResponses._all

        wrongQuantity += wrong

        return {
          id: alternativeId,
          text: alternative.text,
          letter: alternative.letter,
          correct: alternative.correct,
          wrongQuantity: wrong
        }
      })

      return {
        id: question.id,
        text: question.enunciado,
        alternatives,
        wrongQuantity
      }
    })

    return res
  }

  async raioX(userId: string, provaId: string) {
    type AreaResponseType = {
      areaId: number
      totalQuestions: number
      totalCorrect: number
      totalProvaQuestions: number
      areaName: string
    }

    const responses: AreaResponseType[] = await prisma.$queryRaw`
      SELECT
        "Area"."name" as "areaName",
        "Area"."id" as "areaId",
        COUNT("Response"."id") as "totalQuestions",
        SUM(CASE WHEN "Response"."correct" = TRUE THEN 1 ELSE 0 END) as "totalCorrect",
        (SELECT COUNT("Question"."id") FROM "Question" WHERE "Question"."areaId" = "Area"."id" AND "Question"."processoSeletivoId" = ${provaId}) as "totalProvaQuestions"
      FROM "Response"
      INNER JOIN "Question"
        ON "Response"."questionId" = "Question"."id"
      INNER JOIN "Area"
        ON "Question"."areaId" = "Area"."id"
      WHERE "Response"."userId" = ${userId}
        AND "Question"."processoSeletivoId" = ${provaId}
      GROUP BY "Area"."id", "Area"."name"
    `;

    const totalSum = Number(responses.map(response => response.totalProvaQuestions).reduce((reducer, current) => reducer + current))

    return responses.map(response => ({
      area: {
        id: response.areaId,
        name: response.areaName
      },
      relevancia: (Number(response.totalProvaQuestions) / totalSum) * 100,
      desempenho: (Number(response.totalCorrect) / Number(response.totalProvaQuestions)) * 100
    }))
  }

  async provas(userId: string) {
    return prisma.processoSeletivo.findMany({
      where: {
        questions: {
          some: {
            responses: {
              some: { userId }
            }
          }
        }
      }
    })
  }

  async relatorioDeDesempenho(userId: string) {
    const responses = await prisma.response.findMany({
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
