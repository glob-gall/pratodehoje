import {getRepository,Repository} from 'typeorm'
import ICreateRecipe from '../DTOS/ICreateRecipe'
import IRecipesRepository from './IRecipesRepository'

import Recipe from '../entities/Recipe'

class RecipesRepository implements IRecipesRepository{
  
  private ormRepository: Repository<Recipe>

  constructor(){
    this.ormRepository = getRepository(Recipe)
  }

  public async create({name,method,image_url,ingredients,equipaments}:ICreateRecipe):Promise<Recipe>{
    const recipe = this.ormRepository.create({
      name,method,image_url,ingredients,equipaments
    }) 
    await this.ormRepository.save(recipe)

    return recipe
  }

  public async find():Promise<Recipe[]>{
    const recipes = await this.ormRepository.find()

    return recipes
  }
}

export default RecipesRepository