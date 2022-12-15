import database from '../../database'
import AppError from '../../errors/appError'

const listCategorieIdProductsService = async id => {
  try {
    const queryResponse = await database.query(
      `
        SELECT categories.name category ,products.name, products.price
        FROM categories
        JOIN products ON products.category_id = categories.id
        WHERE categories.id = $1;
      `,
      [id]
    )
    return queryResponse.rows
  } catch (error) {
    throw new AppError('product not found', 404)
  }
}

export default listCategorieIdProductsService
