import { inject, injectable } from 'tsyringe'
import IIngredientsRepository from '../../repositories/IIngredientsRepository'
import IRecipesRepository from '../../repositories/IRecipesRepository'

import Recipe from '../../entities/Recipe'
import { ICreateRecipeDTO } from '../_DTOS/ICreateRecipeDTO'

@injectable()
class CreateRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
    @inject('IngredientsRepository')
    private ingredientsRepository: IIngredientsRepository,
  ) {}

  public async execute({
    equipaments,
    image_url,
    ingredientsNames,
    method,
    name,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const methodToString = method.join()

    const ingredintsPromises = ingredientsNames.map(async ingredient => {
      return this.ingredientsRepository.create(ingredient)
    })
    const newIngredients = await Promise.all(ingredintsPromises)

    const recipe = await this.recipesRepository.create({
      equipaments,
      image_url,
      ingredients: newIngredients,
      method: methodToString,
      name,
    })

    // console.log(newIngredients)

    // return Object.assign(recipe, { ingredients: newIngredients })
    return recipe
  }
}

export default CreateRecipeUseCase
