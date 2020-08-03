import { inject, injectable } from 'tsyringe'
import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../entities/Recipe'
import { ICreateRecipeDTO } from './ICreateRecipeDTO'

@injectable()
class CreateRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute({
    equipaments,
    image_url,
    ingredients,
    method,
    name,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = await this.recipesRepository.create({
      equipaments,
      image_url,
      ingredients,
      method,
      name,
    })

    return recipe
  }
}

export default CreateRecipeUseCase
