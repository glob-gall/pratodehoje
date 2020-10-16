import { Request, Response } from 'express'
import { container } from 'tsyringe'
import UpdateAvatarUseCase from './UpdateAvatarUseCase'

class UpdateRecipeAvatarController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const imageUrl = request.file.filename
    const { recipe_id } = request.body
    const updateRecipeAvatar = container.resolve(UpdateAvatarUseCase)
    const recipe = await updateRecipeAvatar.execute(recipe_id, imageUrl)

    return response.json(recipe)
  }
}

export default UpdateRecipeAvatarController
