import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import { IRecipeDTO } from '../_DTOS/IRecipe'

@injectable()
class FindRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(ingredients: string[]): Promise<IRecipeDTO[]> {
    const recipes = await this.recipesRepository.find()

    const recipesIngredientsArray = recipes.reduce((recipeList, recipe) => {
      const assignIngredients = recipe.ingredients.split(',')
      const method = recipe.method.split(',')

      const containsIngredients = ingredients.every(ingredient =>
        assignIngredients.includes(ingredient),
      )
      const recipeIngredientArray = Object.assign(recipe, {
        ingredients: assignIngredients,
        method,
      })

      if (!containsIngredients) {
        return recipeList
      }

      return [...recipeList, recipeIngredientArray]
    }, <IRecipeDTO[]>[])

    return recipesIngredientsArray
  }
}

export default FindRecipeUseCase
