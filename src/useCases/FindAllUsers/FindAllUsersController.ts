import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindAllUsersUseCase from './FindAllUsersUseCase'

export default class FindAllUsersController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllUsersUseCase = container.resolve(FindAllUsersUseCase)
    const users = await findAllUsersUseCase.execute()

    return response.json(classToClass(users))
  }
}
