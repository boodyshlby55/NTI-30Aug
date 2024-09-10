import { Router } from 'express';
import { createSubcategory, deleteSubcategory, filterSubcategories, getAllSubcategories, getSubcategory, updateSubcategory } from '../controllers/subcategories';
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator } from '../utils/validators/subcategoriesValidator';
import { updateCategoryValidator } from '../utils/validators/categoriesValidator';
import { allowedTo, checkActive, protectRoutes } from '../controllers/auth';

const subcategoriesRoute: Router = Router({ mergeParams: true })

subcategoriesRoute.route('/')
  .get(filterSubcategories, getAllSubcategories)
  .post(protectRoutes, checkActive, allowedTo('manager', 'admin'), createSubcategoryValidator, createSubcategory);

subcategoriesRoute.route('/:id')
  .get(getSubcategoryValidator, getSubcategory)
  .put(protectRoutes, checkActive, allowedTo('manager', 'admin'), updateCategoryValidator, updateSubcategory)
  .delete(protectRoutes, checkActive, allowedTo('manager', 'admin'), deleteSubcategoryValidator, deleteSubcategory);

export default subcategoriesRoute;