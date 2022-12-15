import database from '../database'

const validatedExistMiddleware = async (req, resp, next) => {
  const findCategorie = await database.query(
    ` SELECT * 
      FROM categories
      WHERE name = $1;`,
    [req.body.name]
  )
  if (findCategorie.rowCount > 0) {
    return resp.status(400).json({
      message: 'categorie already exists',
    })
  }
  next()
}

export default validatedExistMiddleware
