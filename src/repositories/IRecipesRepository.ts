import Recipe from '../entities/Recipe'

import { ICreateRecipeDTO } from './DTOS/ICreateRecipeDTO'

export default interface IRecipesRepository {
  create(data: ICreateRecipeDTO): Promise<Recipe>
  find(id: string): Promise<Recipe | undefined>
  findAll(): Promise<Recipe[]>
  findByIngredients(ingredients: string[]): Promise<Recipe[]>
  delete(id: string): Promise<void>
}
