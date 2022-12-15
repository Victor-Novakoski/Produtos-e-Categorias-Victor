import database from '../../database'
import AppError from '../../errors/appError'

const createProductsService = async ({ name, price, category_id }) => {
  try {
    const queryResponse = await database.query(
      `INSERT INTO products
          (name, price, category_id)
       VALUES
           ($1, $2, $3)
       RETURNING *;
       `,
      [name, price, category_id]
    )

    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError(error.message, 400)
  }
}

export default createProductsService
