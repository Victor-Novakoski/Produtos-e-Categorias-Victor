import express from "express"
import "express-async-errors"
import handleAppError from "./middlewares/handleAppErrorMiddleware"
import categoriesRoutes from "./routes/categoriesRoutes"
import productsRoutes from "./routes/productsRoutes"

const app = express()

app.use(express.json())

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)
app.use(handleAppError)

export default app
