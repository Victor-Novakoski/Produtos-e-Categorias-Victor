import { Router } from 'express'
import {
  createProductsController,
  deleteProductController,
  listAllProductsController,
  listCategorieIdProductsController,
  listProductController,
  updateProductController,
} from '../controller/products/productsController'
import validatedDataMiddleware from '../middlewares/validatedDataMiddleware'
import { createProductsSerializer } from '../schemas/productsSerializer'

const productsRoutes = Router()

productsRoutes.post(
  '',
  validatedDataMiddleware(createProductsSerializer),
  createProductsController
)
productsRoutes.get('', listAllProductsController)
productsRoutes.get('/:id', listProductController)
productsRoutes.delete('/:id', deleteProductController)
productsRoutes.patch('/:id', updateProductController)
productsRoutes.get('/category/:id', listCategorieIdProductsController)

export default productsRoutes
