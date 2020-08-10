import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
// import { IRecipeDTO } from '../_DTOS/IRecipeDTO'
import Recipe from '../../entities/Recipe'

@injectable()
class FindRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(ingredients: string[]): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findByIngredients(ingredients)

    // const recipesMapped = recipes.map(recipe => {
    //   const method = recipe.method.split(',')
    //   return Object.assign(recipe, { method })
    // })

    return recipes
  }
}

export default FindRecipeUseCase
