import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindAllRecipesUseCase from './FindAllRecipesUseCase'

export default class FindAllRecipesController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findAllRecipesUseCase = container.resolve(FindAllRecipesUseCase)
    const recipes = await findAllRecipesUseCase.execute()

    return response.json(classToClass(recipes))
  }
}
