import FindRecipeUseCase from './FindRecipeUseCase'
import FindRecipeController from './FindRecipeController'
import RecipeRepository from '../../repositories/implementations/RecipesReposiotry'

const recipeRepository = new RecipeRepository()

const findRecipeUseCase = new FindRecipeUseCase(recipeRepository)

const findRecipeController = new FindRecipeController(findRecipeUseCase)

export { findRecipeController, findRecipeUseCase }
