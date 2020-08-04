import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateRecipeUseCase from './CreateRecipeUseCase'

export default class RecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, method, image_url, ingredients, equipaments } = request.body

    const createRecipeUseCase = container.resolve(CreateRecipeUseCase)

    const recipe = await createRecipeUseCase.execute({
      name,
      method,
      image_url,
      ingredients,
      equipaments,
    })
    return response.json(recipe)
  }
}
