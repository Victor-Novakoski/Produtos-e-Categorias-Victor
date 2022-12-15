import database from '../../database'
import AppError from '../../errors/appError'

const deleteCategorieService = async id => {
  try {
    const deleteResponse = await database.query(
      `
      DELETE FROM 
        categories
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

export default deleteCategorieService
