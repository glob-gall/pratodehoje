import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindRecipeUseCase from './FindRecipeUseCase'

export default class RecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findRecipeUseCase = container.resolve(FindRecipeUseCase)
    const recipes = await findRecipeUseCase.execute()

    return response.json(classToClass(recipes))
  }
}
