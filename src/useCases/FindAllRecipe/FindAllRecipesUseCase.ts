import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'

@injectable()
class FindAllRecipesUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll()

    const recipesIngredientsArray = recipes.map(recipe => {
      const method = recipe.method.split(',')

      const recipeIngredientArray = Object.assign(recipe, {
        method,
      })
      return recipeIngredientArray
    })

    return recipesIngredientsArray
  }
}

export default FindAllRecipesUseCase
