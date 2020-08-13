import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import { IRecipeDTO } from '../_DTOS/IRecipeDTO'
import AppError from '../../utils/errors/AppError'

@injectable()
class FindRecipeByIdUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(id: string): Promise<IRecipeDTO> {
    const recipe = await this.recipesRepository.find(id)
    if (!recipe) throw new AppError('Recipe not Found')

    const method = recipe.method.split(',')
    return Object.assign(recipe, { method })
  }
}

export default FindRecipeByIdUseCase
