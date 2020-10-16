import User from 'entities/User'
import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../../repositories/IUsersRepository'

// interface userForList {
//   email: string
//   id: string
//   name: string
//   avatar: string
//   recipes: number
// }

@injectable()
class FindAllRecipesUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(userId: string): Promise<User[]> {
    const users = await this.usersRepository.findAll(userId)

    // const usersWithRecipeNumber = users.map(user => {
    //   // const { email, id, name, avatar, recipes } = user
    //   // const recipesLength = {
    //   //   email,
    //   //   id,
    //   //   name,
    //   //   avatar,
    //   //   recipes: recipes.length,
    //   // }
    //   // return recipesLength
    // })

    return users
  }
}

export default FindAllRecipesUseCase
