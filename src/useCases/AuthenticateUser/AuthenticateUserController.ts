import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'

export default class CreateUserController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body

    const authenticateUser = container.resolve(AuthenticateUserUseCase)

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    })
    const userTransformed = classToClass(user)
    return response.json({ user: userTransformed, token })
  }
}
