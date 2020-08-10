import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateRecipeUseCase from './CreateRecipeUseCase'

export default class RecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const {
      name,
      method,
      image_url,
      ingredientsNames,
      equipaments,
    } = request.body

    const createRecipeUseCase = container.resolve(CreateRecipeUseCase)

    const recipe = await createRecipeUseCase.execute({
      name,
      method,
      image_url,
      ingredientsNames,
      equipaments,
    })
    return response.json(classToClass(recipe))
  }
}
