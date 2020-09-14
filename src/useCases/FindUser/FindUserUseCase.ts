import { inject, injectable } from 'tsyringe'
import AppError from '../../utils/errors/AppError'
import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'

@injectable()
class FindAllRecipesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<User> {
    const user = await this.usersRepository.find(id)
    if (!user) {
      throw new AppError('user not found')
    }
    return user
  }
}

export default FindAllRecipesUseCase
