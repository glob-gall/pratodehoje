import {
  getRepository,
  Repository,
  createQueryBuilder,
  getManager,
  SelectQueryBuilder,
} from 'typeorm'
import { ICreateRecipeDTO } from '../DTOS/ICreateRecipeDTO'
import IRecipesRepository from '../IRecipesRepository'

import Recipe from '../../entities/Recipe'

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>

  constructor() {
    this.ormRepository = getRepository(Recipe)
  }

  public async create(recipe: ICreateRecipeDTO): Promise<Recipe> {
    console.log(recipe)

    const newRecipe = this.ormRepository.create(recipe)
    await this.ormRepository.save(newRecipe)
    return newRecipe
  }

  public async find(): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find({
      relations: ['ingredients'],
    })

    return recipes
  }

  public async findByIngredients(ingredients: string[]): Promise<Recipe[]> {
    const recipes = await this.ormRepository
      .createQueryBuilder('recipes')
      .select('recipes.id')
      .innerJoin('recipes.ingredients', 'ingredients')
      .where('ingredients.name IN (:...ingredients)', { ingredients })
      .getMany()
    const recipesIds = recipes.map(recipe => recipe.id)

    const promisesRecipes = await this.ormRepository
      .createQueryBuilder('recipes')
      .innerJoinAndSelect('recipes.ingredients', 'ingredients')
      .where('recipes.id IN (:...recipesIds)', { recipesIds })
      .getMany()

    return promisesRecipes
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}

export default RecipesRepository
