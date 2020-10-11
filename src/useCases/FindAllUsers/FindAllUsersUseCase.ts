import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../../repositories/IUsersRepository'

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

  public async execute(userId: string): Promise<userForList[]> {
    const users = await this.usersRepository.findAll(userId)

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
