import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/products';
import { createProductValidator, deleteProductValidator, getProductValidator, updateProductValidator } from '../utils/validators/productsValidator';

const productsRoute: Router = Router()
productsRoute.route('/')
  .get(getAllProducts)
  .post(createProductValidator, createProduct);

productsRoute.route('/:id')
  .get(getProductValidator, getProduct)
  .put(updateProductValidator, updateProduct)
  .delete(deleteProductValidator, deleteProduct);

export default productsRoute;