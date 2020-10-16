import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import CreateRecipeUseCase from './CreateRecipeUseCase'

export default class CreateRecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, time, method, ingredientsNames, equipaments } = request.body
    const { id } = request.user
    const createRecipeUseCase = container.resolve(CreateRecipeUseCase)
    const recipe = await createRecipeUseCase.execute({
      name,
      time,
      method,
      ingredientsNames,
      equipaments,
      user_id: id,
    })
    return response.json(classToClass(recipe))
  }
}
