import type { NextApiRequest, NextApiResponse } from "next"

export interface GqlContext {
  req: NextApiRequest
  res: NextApiResponse
}
