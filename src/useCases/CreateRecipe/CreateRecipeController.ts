import { Request, Response } from 'express'
import CreateRecipeUseCase from './CreateRecipeUseCase'

export default class RecipeController {
  constructor(private createRecipeUseCase: CreateRecipeUseCase) {}

  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, method, image_url, ingredients, equipaments } = request.body

    const recipe = await this.createRecipeUseCase.execute({
      name,
      method,
      image_url,
      ingredients,
      equipaments,
    })
    return response.json(recipe)
  }
}
