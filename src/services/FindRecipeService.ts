import RecipesRepository from '../typeorm/repositories/RecipesReposiotry'
import Recipe from '../typeorm/entities/Recipe'
import IRecipesRepository from '../typeorm/repositories/IRecipesRepository'

class FindRecipeService{
  private recipesRepository: IRecipesRepository

  constructor(){
    this.recipesRepository = new RecipesRepository
  }

  public async execute():Promise<Recipe[]>{
    const recipes = await this.recipesRepository.find()

    return recipes
  }
}

export default FindRecipeService