import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindRecipeByIngredientsUseCase from './FindRecipeByIngredientsUseCase'

export default class RecipeByIngredientsController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findRecipeByIngredientsUseCase = container.resolve(
      FindRecipeByIngredientsUseCase,
    )
    const { ingredients } = request.body
    const recipes = await findRecipeByIngredientsUseCase.execute(ingredients)

    return response.json(classToClass(recipes))
  }
}
