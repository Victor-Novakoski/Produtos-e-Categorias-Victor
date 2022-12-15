import updateCategorieService from '../../services/categories/updateCategorieService'
import listCategorieService from '../../services/categories/listCategorieService'
import listAllCategorieService from '../../services/categories/listAllCategoriesService'
import deleteCategorieService from '../../services/categories/deleteCategorieService'
import createCategorieService from '../../services/categories/createCategoriesService'

const updateCategorieController = async (req, resp) => {
  const updateCategorie = await updateCategorieService(req.body, req.params.id)
  return resp.status(200).json(updateCategorie)
}

const listCategorieController = async (req, resp) => {
  const data = await listCategorieService(req.params.id)
  resp.status(200).json(data)
}

const listAllCategoriesController = async (req, resp) => {
  const data = await listAllCategorieService()
  resp.status(200).json(data)
}

const deleteCategorieController = async (req, resp) => {
  await deleteCategorieService(req.params.id)
  return resp.status(204).send()
}

const createCategorieController = async (req, resp) => {
  const data = req.body
  const categorie = await createCategorieService(data)
  resp.status(201).json(categorie)
}

export {
  updateCategorieController,
  listCategorieController,
  listAllCategoriesController,
  deleteCategorieController,
  createCategorieController,
}
