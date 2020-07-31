import { Request, Response } from 'express'
import FindRecipeUseCase from './FindRecipeUseCase'

export default class RecipeController {
  constructor(private findRecipeUseCase: FindRecipeUseCase) {}

  public async read(request: Request, response: Response): Promise<Response> {
    const recipes = await this.findRecipeUseCase.execute()

    return response.json(recipes)
  }
}
