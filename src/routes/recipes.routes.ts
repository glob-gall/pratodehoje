import { Router } from 'express'
import { createRecipeController } from '../useCases/CreateRecipe'
import { findRecipeController } from '../useCases/FindRecipe'
import { deleteRecipeController } from '../useCases/DeleteRecipe'
import { findRecipeByIngredientsController } from '../useCases/FindRecipeByIngredients'

const recipesRoutes = Router()

recipesRoutes.post('/', createRecipeController.execute)
recipesRoutes.get('/all', findRecipeController.execute)
recipesRoutes.post('/ingredients', findRecipeByIngredientsController.execute)
recipesRoutes.delete('/:id', deleteRecipeController.execute)

export default recipesRoutes
