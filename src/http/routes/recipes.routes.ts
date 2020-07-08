import { Router } from 'express'
import RecipeController from '../Controllers/RecipesController'

const recipesRoutes = Router()
const recipeController = new RecipeController()

recipesRoutes.post('/', recipeController.create)
recipesRoutes.get('/', recipeController.read)

export default recipesRoutes
