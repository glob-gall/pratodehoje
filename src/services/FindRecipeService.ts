import RecipesRepository from '../database/repositories/RecipesReposiotry'
import Recipe from '../database/entities/Recipe'
import IRecipesRepository from '../database/repositories/IRecipesRepository'

class FindRecipeService {
  private recipesRepository: IRecipesRepository

  constructor() {
    this.recipesRepository = new RecipesRepository()
  }

  public async execute(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.find()

    return recipes
  }
}

export default FindRecipeService
