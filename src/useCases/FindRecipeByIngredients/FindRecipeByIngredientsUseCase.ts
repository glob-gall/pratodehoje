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

    const recipesMapped = recipes.map(recipe => {
      const method = recipe.method.split(',')
      return Object.assign(recipe, { method })
    })

    return recipesMapped
  }
}

export default FindRecipeUseCase
