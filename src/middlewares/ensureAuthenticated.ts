import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { container } from 'tsyringe'
import auth from '../config/auth'
import AppError from '../utils/errors/AppError'
import { FindUserUseCase } from '../useCases/FindUser'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token is missing')
  }
  const { secret } = auth.jwt

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, secret)

    const { sub } = decoded as TokenPayload

    const findUser = container.resolve(FindUserUseCase)
    await findUser.execute(sub)

    request.user = {
      id: sub,
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT token', 401)
  }
}
