import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import FindRecipeByIdUseCase from './FindRecipeByIdUseCase'

export default class FindRecipeByIdController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params
    const findRecipeByIdUseCase = container.resolve(FindRecipeByIdUseCase)
    const recipes = await findRecipeByIdUseCase.execute(id)

    return response.json(classToClass(recipes))
  }
}
