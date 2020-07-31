import { Router } from 'express'
import { createRecipeController } from '../useCases/CreateRecipe/index'
import { findRecipeController } from '../useCases/FindRecipe/index'

const recipesRoutes = Router()

recipesRoutes.post('/', createRecipeController.create)
recipesRoutes.get('/', findRecipeController.read)

export default recipesRoutes
