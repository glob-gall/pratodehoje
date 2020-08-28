import { Router } from 'express'
import recipeRouter from './recipes.routes'
import userRouter from './users.routes'
import sessionRouter from './sessions.routes'

const routes = Router()

routes.use('/recipes', recipeRouter)
routes.use('/users', userRouter)
routes.use('/session', sessionRouter)

export default routes
