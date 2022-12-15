import database from '../../database'
import AppError from '../../errors/appError'

const listProductService = async id => {
  try {
    const queryResponse = await database.query(
      `
      SELECT * 
      FROM products
      WHERE id = $1;
  `,
      [id]
    )
    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError('product not found', 404)
  }
}

export default listProductService
