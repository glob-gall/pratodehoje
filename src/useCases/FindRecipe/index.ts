import { container } from 'tsyringe'
import FindRecipeUseCase from './FindRecipeUseCase'
import FindRecipeController from './FindRecipeController'

const findRecipeUseCase = container.resolve(FindRecipeUseCase)
const findRecipeController = new FindRecipeController(findRecipeUseCase)

export { findRecipeController }
