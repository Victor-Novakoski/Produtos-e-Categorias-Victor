import AppError from '../errors/appError'

const handleAppError = (error, req, resp, next) => {
  if (error instanceof AppError) {
    return resp.status(error.statusCode).json({ message: error.message })
  }
  return resp.status(500).json({
    message: 'internal server error',
  })
}

export default handleAppError
