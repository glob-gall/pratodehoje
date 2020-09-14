import { getRepository, Repository } from 'typeorm'
import { ICreateRecipeDTO } from '../DTOS/ICreateRecipeDTO'
import IRecipesRepository from '../IRecipesRepository'

import Recipe from '../../entities/Recipe'
import Ingredient from '../../entities/Ingredient'

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

  public async findAll(): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find({
      relations: ['ingredients'],
    })

    return recipes
  }

  public async find(id: string): Promise<Recipe | undefined> {
    const recipe = await this.ormRepository.findOne(
      { id },
      {
        relations: ['ingredients'],
      },
    )

    return recipe
  }

  public async findByIngredients(ingredients: Ingredient[]): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find({
      where: {
        ingredients,
      },
    })
    return recipes
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}

export default RecipesRepository
