import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateUserUseCase from './CreateUserUseCase'

export default class CreateUserController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, email, password } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    })
    return response.json(classToClass(user))
  }
}
