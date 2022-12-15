import database from '../../database'

const listAllCategorieService = async () => {
  try {
    const queryResponse = await database.query(
      `
    SELECT
        *
    FROM
        categories;
  `
    )

    return queryResponse.rows
  } catch (error) {
    throw new AppError('categorie not found', 404)
  }
}

export default listAllCategorieService
