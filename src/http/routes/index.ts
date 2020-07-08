import {Router} from 'express'
import recipeRoutes from './recipes.routes'

const routes = Router()

routes.use('/recipes',recipeRoutes)

export default routes