import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import UpdateUserAvatarUseCase from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarUseCase)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    })

    return response.json(classToClass(user))
  }
}

export default UpdateUserAvatarController
