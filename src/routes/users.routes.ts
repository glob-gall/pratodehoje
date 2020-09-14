import { Router } from 'express'
import { createUserController } from '../useCases/CreateUser'
import { findAllUsersController } from '../useCases/FindAllUsers'
import { findUserController } from '../useCases/FindUser'

const userRoutes = Router()

userRoutes.post('/', createUserController.execute)
userRoutes.get('/:id', findUserController.execute)
userRoutes.get('/', findAllUsersController.execute)

export default userRoutes
