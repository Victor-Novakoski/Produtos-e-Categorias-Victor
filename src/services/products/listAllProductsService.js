import database from '../../database'

const listAllProductsService = async () => {
  try {
    const queryResponse = await database.query(
      `
    SELECT
        *
    FROM
        products;
  `
    )
    return queryResponse.rows
  } catch (error) {
    throw new AppError('product not found', 404)
  }
}

export default listAllProductsService
