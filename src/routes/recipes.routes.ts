import { Router } from 'express'
import { createRecipeController } from '../useCases/CreateRecipe'
import { findRecipeController } from '../useCases/FindRecipe'
import { deleteRecipeController } from '../useCases/DeleteRecipe'

const recipesRoutes = Router()

recipesRoutes.post('/', createRecipeController.execute)
recipesRoutes.get('/', findRecipeController.execute)
recipesRoutes.delete('/:id', deleteRecipeController.execute)

export default recipesRoutes
