import database from '../../database'
import AppError from '../../errors/appError'

const updateProductService = async (categorieData, id) => {
  let query = `UPDATE products set `
  const keys = Object.keys(categorieData)
  const values = Object.values(categorieData)

  keys.forEach((key, index) => {
    query += `${key} = \$${index + 1}, `
  })

  query = query.slice(0, -2)

  query += ` WHERE id = \$${keys.length + 1} RETURNING * ;`
  try {
    const queryResponse = await database.query(query, [...values, id])
    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError(error.message, 404)
  }
}
export default updateProductService
