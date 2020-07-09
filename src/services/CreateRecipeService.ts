import RecipesRepository from '../shared/database/repositories/RecipesReposiotry'
import Recipe from '../shared/database/entities/Recipe'
// import IRecipesRepository from '../database/repositories/IRecipesRepository'

interface IRequest {
  name: string
  method: string
  image_url: string
  ingredients: string
  equipaments: string
}

class CreateRecipeService {
  private recipesRepository = new RecipesRepository()

  public async execute({
    name,
    method,
    image_url,
    ingredients,
    equipaments,
  }: IRequest): Promise<Recipe> {
    const recipe = await this.recipesRepository.create({
      name,
      method,
      image_url,
      ingredients,
      equipaments,
    })

    return recipe
  }
}

export default CreateRecipeService
