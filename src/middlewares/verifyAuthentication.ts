import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { container } from 'tsyringe'
import { FindUserUseCase } from '../useCases/FindUser'
import AppError from '../utils/errors/AppError'
import auth from '../config/auth'

interface TokenPayload {
  iat: string
  exp: string
  sub: string
}

export default async function verifyAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    request.user = {
      id: '',
    }
    return next()
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
  } catch (err) {
    throw new AppError('Invalid JWT Token', 401)
  }
}
