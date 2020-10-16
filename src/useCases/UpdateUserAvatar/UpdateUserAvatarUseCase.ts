import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'
import AppError from '../../utils/errors/AppError'
import IStorageProvider from '../../container/providers/storageProvider/IStorageProvider'

interface Request {
  user_id: string
  avatarFilename: string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const user = await this.userRepository.findUser(user_id)

    if (!user)
      throw new AppError('Only authenticated users can change avatar', 401)

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar)
    }
    const fileName = await this.storageProvider.saveFile(avatarFilename)

    user.avatar = fileName

    await this.userRepository.save(user)

    // await this.storageProvider.deleteFile(avatarFilename)

    return user
  }
}

export default UpdateUserAvatarUseCase
