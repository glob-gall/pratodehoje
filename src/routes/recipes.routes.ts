import { Router } from 'express'
import multer from 'multer'
import { createRecipeController } from '../useCases/CreateRecipe'
import { findAllRecipesController } from '../useCases/FindAllRecipe'
import { deleteRecipeController } from '../useCases/DeleteRecipe'
import { findRecipeByIngredientsController } from '../useCases/FindRecipeByIngredients'
import { findRecipeByIdController } from '../useCases/FindRecipeById'
import { updateRecipeAvatarController } from '../useCases/UpdateRecipeAvatar'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

import uploadConfig from '../config/upload'

const upload = multer(uploadConfig.multer)

const recipesRoutes = Router()

recipesRoutes.post('/', ensureAuthenticated, createRecipeController.execute)
recipesRoutes.get('/', findAllRecipesController.execute)
recipesRoutes.post('/ingredients', findRecipeByIngredientsController.execute)
recipesRoutes.delete('/:id', deleteRecipeController.execute)
recipesRoutes.get('/:id', findRecipeByIdController.execute)
recipesRoutes.post(
  '/changeImage',
  ensureAuthenticated,
  upload.single('image_url'),
  updateRecipeAvatarController.execute,
)

export default recipesRoutes
