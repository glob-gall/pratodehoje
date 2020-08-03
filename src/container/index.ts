import { container } from 'tsyringe'

import IRecipesRepository from '../repositories/IRecipesRepository'
import RecipesRepository from '../repositories/implementations/RecipesRepository'

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
)
