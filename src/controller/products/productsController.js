import createProductsService from '../../services/products/createProductsService'
import deleteProductService from '../../services/products/deleteProductsService'
import listAllProductsService from '../../services/products/listAllProductsService'
import listCategorieIdProductsService from '../../services/products/listCategorieIdProductsService'
import listProductService from '../../services/products/listProductsService'
import updateProductService from '../../services/products/updateProductsService'

const createProductsController = async (req, resp) => {
  const data = req.body
  const products = await createProductsService(data)
  return resp.status(201).json(products)
}

const deleteProductController = async (req, resp) => {
  await deleteProductService(req.params.id)
  return resp.status(204).send()
}

const listAllProductsController = async (req, resp) => {
  const data = await listAllProductsService()
  return resp.status(200).json(data)
}

const listCategorieIdProductsController = async (req, resp) => {
  const data = await listCategorieIdProductsService(req.params.id)
  return resp.status(200).json(data)
}

const listProductController = async (req, resp) => {
  const data = await listProductService(req.params.id)
  return resp.status(200).json(data)
}

const updateProductController = async (req, resp) => {
  const updateCategorie = await updateProductService(req.body, req.params.id)
  return resp.status(200).json(updateCategorie)
}

export {
  createProductsController,
  deleteProductController,
  listAllProductsController,
  listCategorieIdProductsController,
  listProductController,
  updateProductController,
}
