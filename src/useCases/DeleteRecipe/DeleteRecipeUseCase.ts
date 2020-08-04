import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'

@injectable()
class DeleteRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.recipesRepository.delete(id)
  }
}

export default DeleteRecipeUseCase
