import { Router } from 'express'
import { createRecipeController } from '../useCases/CreateRecipe/index'
import { findRecipeController } from '../useCases/FindRecipe/index'

const recipesRoutes = Router()

recipesRoutes.post('/', createRecipeController.execute)
recipesRoutes.get('/', findRecipeController.execute)

export default recipesRoutes
