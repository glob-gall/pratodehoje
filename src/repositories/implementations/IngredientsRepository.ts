import { getRepository, Repository } from 'typeorm'
import IIngredientsRepository from '../IIngredientsRepository'

import Ingredient from '../../entities/Ingredient'

class IngredientsRepository implements IIngredientsRepository {
  private ormRepository: Repository<Ingredient>

  constructor() {
    this.ormRepository = getRepository(Ingredient)
  }

  public async create(name: string): Promise<Ingredient> {
    const ingredient = this.ormRepository.create({ name })
    await this.ormRepository.save(ingredient)
    return ingredient
  }
}

export default IngredientsRepository
