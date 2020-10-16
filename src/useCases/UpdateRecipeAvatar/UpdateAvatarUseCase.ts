import { inject, injectable } from 'tsyringe'

import IRecipesRepository from '../../repositories/IRecipesRepository'
import IStorageProvider from '../../container/providers/storageProvider/IStorageProvider'
import AppError from '../../utils/errors/AppError'
import Recipe from '../../entities/Recipe'

@injectable()
class UpdateAvatarUseCase {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
    @inject('RecipesRepository')
    private recipeRepository: IRecipesRepository,
  ) {}

  public async execute(recipe_id: string, image_url: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.find(recipe_id)

    if (!recipe) {
      throw new AppError(
        'Impossible to update a image from a non-existing recipe',
      )
    }

    if (recipe.image_url) {
      await this.storageProvider.deleteFile(recipe.image_url)
    }

    const fileName = await this.storageProvider.saveFile(image_url)

    recipe.image_url = fileName
    this.recipeRepository.save(recipe)

    return recipe
  }
}

export default UpdateAvatarUseCase
