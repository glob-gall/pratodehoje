import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'

interface userForList {
  email: string
  id: string
  name: string
  recipes: number
}

@injectable()
class FindAllRecipesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<userForList[]> {
    const users = await this.usersRepository.findAllUsers()

    const usersWithRecipeNumber = users.map(user => {
      const { email, id, name, recipes } = user
      const recipesLength = {
        email,
        id,
        name,
        recipes: recipes.length,
      }
      return recipesLength
    })

    return usersWithRecipeNumber
  }
}

export default FindAllRecipesUseCase
