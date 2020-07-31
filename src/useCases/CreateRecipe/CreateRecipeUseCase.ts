import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'
import { ICreateRecipeDTO } from './ICreateRecipeDTO'

class CreateRecipeService {
  constructor(private recipesRepository: IRecipesRepository) {}

  public async execute({
    equipaments,
    image_url,
    ingredients,
    method,
    name,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = await this.recipesRepository.create({
      equipaments,
      image_url,
      ingredients,
      method,
      name,
    })

    return recipe
  }
}

export default CreateRecipeService
