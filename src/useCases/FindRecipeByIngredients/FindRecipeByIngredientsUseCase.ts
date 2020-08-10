import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'

@injectable()
class FindRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(ingredients: string[]): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findByIngredients(ingredients)

    return recipes
  }
}

export default FindRecipeUseCase
