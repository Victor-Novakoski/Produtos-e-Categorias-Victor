import database from '../../database'
import AppError from '../../errors/appError'

const listCategorieService = async id => {
  try {
    const queryResponse = await database.query(
      `
    SELECT * 
    FROM categories
    WHERE id = $1;
`,
      [id]
    )
    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError('categorie not found', 404)
  }
  // const categorie = queryResponse.rows[0]
  // if (!categorie) {
  //   throw new AppError('product not found', 404)
  // }
}

export default listCategorieService
