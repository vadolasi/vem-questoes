import { AuthChecker, createParamDecorator } from "type-graphql"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface ContextType {
  getUserId: () => string | null
}

export const authChecker: AuthChecker<ContextType> = async (
  { root, args, context, info },
  roles
) =>{
  const userId = context.getUserId()

  if (!userId) {
    return false
  }

  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!user) {
    return false
  }

  if (roles.length === 0) {
    return true
  } else if (roles.includes(user.role)) {
    return true
  }

  return false
}

export function CurrentUserID() {
  return createParamDecorator<ContextType>(({ context }) => context.getUserId())
}
