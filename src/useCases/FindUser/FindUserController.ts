import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindUserUseCase from './FindUserUseCase'

export default class FindAllUsersController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params
    const findUserUseCase = container.resolve(FindUserUseCase)
    const user = await findUserUseCase.execute(id)

    return response.json(classToClass(user))
  }
}
