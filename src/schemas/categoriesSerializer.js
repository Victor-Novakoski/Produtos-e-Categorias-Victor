import * as yup from 'yup'

const createCategorySerializer = yup.object().shape({
  name: yup.string().required(),
})

const CategoryReturnSerializer = yup.object().shape({
  id: yup.number,
  name: yup.string().required(),
})

export { createCategorySerializer, CategoryReturnSerializer }
