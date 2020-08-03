import { container } from 'tsyringe'
import CreateRecipeController from './CreateRecipeController'
import CreateRecipeUseCase from './CreateRecipeUseCase'

const createRecipeUseCase = container.resolve(CreateRecipeUseCase)

const createRecipeController = new CreateRecipeController(createRecipeUseCase)

export { createRecipeController }
