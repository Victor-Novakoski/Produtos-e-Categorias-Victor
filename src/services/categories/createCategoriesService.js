import database from '../../database'

const createCategorieService = async ({ name }) => {
  try {
    
    const queryResponse = await database.query(
      `INSERT INTO
           categories (name)
       VALUES
           ($1)
       RETURNING id::INTEGER, name;`,
      [name]
    )
    
    return queryResponse.rows[0]
  } catch (error) {
    throw new AppError('categorie not found', 404)
  }
}

export default createCategorieService
