import { Router } from 'express'
import validatedDataMiddleware from '../middlewares/validatedDataMiddleware'
import { createCategorySerializer } from '../schemas/categoriesSerializer'
import validatedExistMiddleware from '../middlewares/validatedExistMiddleware'
import {
  createCategorieController,
  deleteCategorieController,
  listAllCategoriesController,
  listCategorieController,
  updateCategorieController,
} from '../controller/categories/categorieController'

const categoriesRoutes = Router()

categoriesRoutes.get('', listAllCategoriesController)
categoriesRoutes.post(
  '',
  validatedDataMiddleware(createCategorySerializer),
  validatedExistMiddleware,
  createCategorieController
)
categoriesRoutes.get('/:id', listCategorieController)
categoriesRoutes.delete('/:id', deleteCategorieController)
categoriesRoutes.patch('/:id', updateCategorieController)

export default categoriesRoutes
