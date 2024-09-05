import * as all from '../interfaces'
import { Application, NextFunction, Request, Response } from "express";
import categoriesRoute from "./categoriesRoute";
import subcategoriesRoute from "./subcategoriesRoute";
import productsRoute from './productsRoute';
import globalErrors from '../middlewares/globalErrors';
import ApiErrors from '../utils/apiErrors';

const mountRoutes = (app: Application) => {
  app.use('/api/v1/categories', categoriesRoute)
  app.use('/api/v1/subcategories', subcategoriesRoute)
  app.use('/api/v1/products', productsRoute)
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    return next(new ApiErrors(`the route ${req.originalUrl} not found`, 400))
  })
  app.use(globalErrors);
}

export default mountRoutes;