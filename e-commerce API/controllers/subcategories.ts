import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandling";
import subcategoriesModel from "../models/subcategoriesModel";
import { Subcategories } from "../interfaces/subcategories";
import { NextFunction, Request, Response } from "express";
import { FilterData } from "../interfaces/filterData";

export const filterSubcategories = (req: Request, res: Response, next: NextFunction) => {
  let filterData: FilterData = {};
  if (req.params.categoryId) {
    filterData.category = req.params.categoryId;
  }
  req.filterData = filterData;
  next();
}

export const getAllSubcategories = getAll<Subcategories>(subcategoriesModel, 'subcategories');
export const createSubcategory = createOne<Subcategories>(subcategoriesModel);
export const getSubcategory = getOne<Subcategories>(subcategoriesModel);
export const updateSubcategory = updateOne<Subcategories>(subcategoriesModel)
export const deleteSubcategory = deleteOne<Subcategories>(subcategoriesModel)