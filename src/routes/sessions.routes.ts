import { Router } from 'express'
import { authenticateUserController } from '../useCases/AuthenticateUser'

const userRoutes = Router()

userRoutes.post('/', authenticateUserController.execute)
// userRoutes.get('/')

export default userRoutes
