import { container, inject, injectable } from 'tsyringe'
import AppError from '../../utils/errors/AppError'
import Recipe from '../../entities/Recipe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import IIngredientsRepository from '../../repositories/IIngredientsRepository'

interface IRecipe {
  id: string
  time: number
  name: string
  ingredientsNames: string[]
  method: string[]
  image_url: string
}

interface IEditRecipe {
  recipe: IRecipe
  user_id: string
}

@injectable()
class EditRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipeRepository: IRecipesRepository,
    @inject('IngredientsRepository')
    private ingredientsRepository: IIngredientsRepository,
  ) {}

  public async execute({ recipe, user_id }: IEditRecipe): Promise<Recipe> {
    console.log('chegouuuuuuuu')
    const { time, name, ingredientsNames } = recipe

    const findedRecipe = await this.recipeRepository.find(recipe.id)
    const methodToString = recipe.method.join()

    if (!findedRecipe) throw new AppError('Recipe Not found')
    if (user_id !== findedRecipe.user_id)
      throw new AppError('user incorrect for this Recipe')

    const ingredintsPromises = ingredientsNames.map(async ingredient => {
      return this.ingredientsRepository.findOrCreate(ingredient)
    })
    const newIngredients = await Promise.all(ingredintsPromises)

    findedRecipe.time = time
    findedRecipe.name = name
    findedRecipe.method = methodToString
    findedRecipe.ingredients = newIngredients

    await this.recipeRepository.save(findedRecipe)
    return findedRecipe
  }
}

export default EditRecipeUseCase
