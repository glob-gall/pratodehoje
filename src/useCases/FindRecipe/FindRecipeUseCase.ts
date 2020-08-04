import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import { IRecipeDTO } from '../DTOS/IRecipe'

@injectable()
class FindRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(): Promise<IRecipeDTO[]> {
    const recipes = await this.recipesRepository.find()

    const recipesIngredientsArray = recipes.map(recipe => {
      const ingredients = recipe.ingredients.split(',')
      const method = recipe.method.split(',')

      const recipeIngredientArray = Object.assign(recipe, {
        ingredients,
        method,
      })
      return recipeIngredientArray
    })

    return recipesIngredientsArray
  }
}

export default FindRecipeUseCase
