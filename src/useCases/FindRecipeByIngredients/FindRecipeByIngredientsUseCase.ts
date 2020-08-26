import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'

@injectable()
class FindRecipeByIngredientsUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(ingredientsNames: string[]): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findByIngredients(
      ingredientsNames,
    )

    return recipes
  }
}

export default FindRecipeByIngredientsUseCase
