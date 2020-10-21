import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import EditRecipeUseCase from './EditRecipeUseCase'

class EditRecipeController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id
    const recipe = request.body
    const editRecipe = container.resolve(EditRecipeUseCase)
    const editedRecipe = await editRecipe.execute({ recipe, user_id })

    return response.json(classToClass(editedRecipe))
  }
}

export default EditRecipeController
