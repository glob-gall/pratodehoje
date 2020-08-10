import Ingredient from '../entities/Ingredient'

export default interface IIngredientsRepository {
  create(name: string): Promise<Ingredient>
}
