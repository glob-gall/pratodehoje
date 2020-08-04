import { Request, Response } from 'express'
import { container } from 'tsyringe'
import DeleteRecipeUseCase from './DeleteRecipeUseCase'

export default class RecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params

    const deleteRecipeUseCase = container.resolve(DeleteRecipeUseCase)
    await deleteRecipeUseCase.execute(id)

    return response.status(201).send()
  }
}
