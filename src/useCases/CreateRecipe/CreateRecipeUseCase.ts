import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'
import { IRecipeDTO } from '../DTOS/IRecipe'

@injectable()
class CreateRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute({
    equipaments,
    image_url,
    ingredients,
    method,
    name,
  }: IRecipeDTO): Promise<Recipe> {
    const ingredientsToString = ingredients.join()
    const methodToString = method.join()
    const recipe = await this.recipesRepository.create({
      equipaments,
      image_url,
      ingredients: ingredientsToString,
      method: methodToString,
      name,
    })

    return recipe
  }
}

export default CreateRecipeUseCase
