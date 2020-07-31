import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'

class FindRecipeService {
  constructor(private recipesRepository: IRecipesRepository) {}

  public async execute(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.find()

    return recipes
  }
}

export default FindRecipeService
