import { container } from 'tsyringe'

import IngredientsRepository from '../repositories/implementations/IngredientsRepository'
import IRecipesRepository from '../repositories/IRecipesRepository'
import RecipesRepository from '../repositories/implementations/RecipesRepository'
import IIngredientsRepository from '../repositories/IIngredientsRepository'

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
)
container.registerSingleton<IIngredientsRepository>(
  'IngredientsRepository',
  IngredientsRepository,
)
