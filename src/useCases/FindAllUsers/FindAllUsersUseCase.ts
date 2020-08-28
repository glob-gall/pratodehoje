import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'

@injectable()
class FindAllRecipesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAllUsers()

    return users
  }
}

export default FindAllRecipesUseCase
