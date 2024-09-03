import { Router } from 'express';
import { createSubcategory, deleteSubcategory, filterSubcategories, getAllSubcategories, getSubcategory, updateSubcategory } from '../controllers/subcategories';
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator } from '../utils/validators/subcategoriesValidator';
import { updateCategoryValidator } from '../utils/validators/categoriesValidator';

const subcategoriesRoute: Router = Router({ mergeParams: true })

subcategoriesRoute.route('/')
  .get(filterSubcategories, getAllSubcategories)
  .post(createSubcategoryValidator, createSubcategory);

subcategoriesRoute.route('/:id')
  .get(getSubcategoryValidator, getSubcategory)
  .put(updateCategoryValidator, updateSubcategory)
  .delete(deleteSubcategoryValidator, deleteSubcategory);

export default subcategoriesRoute;