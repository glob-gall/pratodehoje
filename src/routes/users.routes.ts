import { Router } from 'express'
import { createUserController } from '../useCases/CreateUser'
import { findAllUsersController } from '../useCases/FindAllUsers'

const userRoutes = Router()

userRoutes.post('/', createUserController.execute)
userRoutes.get('/', findAllUsersController.execute)

export default userRoutes
