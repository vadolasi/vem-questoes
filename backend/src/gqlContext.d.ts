import { HttpRequest, HttpResponse } from 'uWebSockets.js'

export interface GqlContext {
  req: HttpRequest
  res: HttpResponse
}
