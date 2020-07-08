import RecipesRepository from '../typeorm/repositories/RecipesReposiotry'
import Recipe from '../typeorm/entities/Recipe'
import IRecipesRepository from '../typeorm/repositories/IRecipesRepository'

interface IRequest{
  name:string
  method:string
  image_url:string
  ingredients:string
  equipaments:string
}

class CreateRecipeService{
  private recipesRepository: IRecipesRepository

  constructor(){
    this.recipesRepository = new RecipesRepository
  }

  public async execute({name,method,image_url,ingredients,equipaments}:IRequest):Promise<Recipe>{
    const recipes = await this.recipesRepository.create({
      name,
      method,
      image_url,
      ingredients,
      equipaments,
    })

    return recipes
  }
}

export default CreateRecipeService