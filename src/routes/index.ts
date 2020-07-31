import { Router } from 'express'
import recipeRouter from './recipes.routes'

const routes = Router()

routes.use('/recipes', recipeRouter)

export default routes
