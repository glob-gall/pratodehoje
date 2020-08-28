import { Router } from 'express'
import { createRecipeController } from '../useCases/CreateRecipe'
import { findAllRecipesController } from '../useCases/FindAllRecipe'
import { deleteRecipeController } from '../useCases/DeleteRecipe'
import { findRecipeByIngredientsController } from '../useCases/FindRecipeByIngredients'
import { findRecipeByIdController } from '../useCases/FindRecipeById'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const recipesRoutes = Router()

recipesRoutes.post('/', ensureAuthenticated, createRecipeController.execute)
recipesRoutes.get('/', findAllRecipesController.execute)
recipesRoutes.post('/ingredients', findRecipeByIngredientsController.execute)
recipesRoutes.delete('/:id', deleteRecipeController.execute)
recipesRoutes.get('/:id', findRecipeByIdController.execute)

export default recipesRoutes
