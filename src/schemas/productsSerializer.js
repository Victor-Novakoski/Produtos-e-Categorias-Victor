import * as yup from 'yup'

const createProductsSerializer = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number()
})

const productsReturnSerializer = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
  price: yup.number(),
  category_id: yup.number(),
})

export { createProductsSerializer, productsReturnSerializer }
