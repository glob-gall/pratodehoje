import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'
import IIngredientsRepository from '../../repositories/IIngredientsRepository'

@injectable()
class FindRecipeByIngredientsUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
    @inject('IngredientsRepository')
    private ingredientsRepository: IIngredientsRepository,
  ) {}

  public async execute(ingredientsNames: string[]): Promise<Recipe[]> {
    const checker = (ingredients: string[], ingredientNames: string[]) =>
      ingredientNames.every(ingredient => ingredients.includes(ingredient))

    const recipes = await this.recipesRepository.findAll()
    const recipesReduced = recipes.filter(recipe => {
      const RecipeIngredientsNames = recipe.ingredients.map(
        ingredient => ingredient.name,
      )
      return checker(RecipeIngredientsNames, ingredientsNames)
    })

    return recipesReduced
  }
}

export default FindRecipeByIngredientsUseCase
