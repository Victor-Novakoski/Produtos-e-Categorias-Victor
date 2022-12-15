import database from '../../database'
import AppError from '../../errors/appError'

const deleteProductService = async id => {
  try {
    const deleteResponse = await database.query(
      `
      DELETE FROM 
        products
      WHERE 
        id = $1;
      `,
      [id]
    )
    return deleteResponse.rows
  } catch (error) {
    throw new AppError(error.message, 404)
  }
}

export default deleteProductService
