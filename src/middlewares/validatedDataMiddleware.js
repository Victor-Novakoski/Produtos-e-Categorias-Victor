const validatedDataMiddleware = schema => async (req, resp, next) => {
  try {
    const validated = await schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })
    req.validatedBody = validated
    next()
  } catch (error) {
    return resp.status(400).json({
      message: error.message,
    })
  }
}

export default validatedDataMiddleware
