import { getRepository, Repository } from 'typeorm'
import { ICreateRecipeDTO } from '../DTOS/ICreateRecipeDTO'
import IRecipesRepository from '../IRecipesRepository'

import Recipe from '../../entities/Recipe'

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>

  constructor() {
    this.ormRepository = getRepository(Recipe)
  }

  public async create(recipe: ICreateRecipeDTO): Promise<Recipe> {
    const newRecipe = this.ormRepository.create(recipe)
    await this.ormRepository.save(newRecipe)

    return newRecipe
  }

  public async find(): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find()

    return recipes
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}

export default RecipesRepository
