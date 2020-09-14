import Ingredient from '../entities/Ingredient'

export default interface IIngredientsRepository {
  findOrCreate(name: string): Promise<Ingredient>
}
