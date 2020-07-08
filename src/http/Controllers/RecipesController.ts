import {Request,Response} from 'express'
import CreateRecipeService from '../../services/CreateRecipeService'
import FindRecipeService from '../../services/FindRecipeService'

export default class RecipeController{

  public async create(request:Request,response:Response):Promise<Response>{
    console.log(request.body)
    const {name,method,image_url,ingredients,equipaments} = request.body

      const createRecipe = new CreateRecipeService

      const recipe = await createRecipe.execute({name,method,image_url,ingredients,equipaments})
      return response.json(recipe)
    }

    public async read(request:Request,response:Response):Promise<Response>{
      const findRecipes = new FindRecipeService
      const recipes = findRecipes.execute()

      return response.json(recipes)
  }
}
