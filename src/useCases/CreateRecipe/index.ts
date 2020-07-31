import CreateRecipeController from './CreateRecipeController'
import CreateRecipeUseCase from './CreateRecipeUseCase'
import RecipeRepository from '../../repositories/implementations/RecipesReposiotry'

const recipeRepository = new RecipeRepository()

const createRecipeUseCase = new CreateRecipeUseCase(recipeRepository)

const createRecipeController = new CreateRecipeController(createRecipeUseCase)

export { createRecipeController, createRecipeUseCase }
