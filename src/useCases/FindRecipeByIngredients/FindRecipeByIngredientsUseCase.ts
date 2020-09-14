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
    const ingredientsPromises = ingredientsNames.map(async ingredientName => {
      const ingredient = await this.ingredientsRepository.findOrCreate(
        ingredientName,
      )

      return ingredient
    })
    const ingredients = await Promise.all(ingredientsPromises)
    console.log(ingredients)

    const recipes = await this.recipesRepository.findByIngredients(ingredients)

    return recipes
  }
}

export default FindRecipeByIngredientsUseCase
