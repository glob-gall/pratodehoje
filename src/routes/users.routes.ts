import multer from 'multer'
import { Router } from 'express'
import verifyAuthentication from '../middlewares/verifyAuthentication'
import { updateUserAvatarController } from '../useCases/UpdateUserAvatar'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { createUserController } from '../useCases/CreateUser'
import { findAllUsersController } from '../useCases/FindAllUsers'
import { findUserController } from '../useCases/FindUser'
import uploadConfig from '../config/upload'

const userRoutes = Router()
const upload = multer(uploadConfig.multer)

userRoutes.post('/', createUserController.execute)
userRoutes.get('/:id', findUserController.execute)
userRoutes.get('/', verifyAuthentication, findAllUsersController.execute)
userRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateUserAvatarController.execute,
)

export default userRoutes
