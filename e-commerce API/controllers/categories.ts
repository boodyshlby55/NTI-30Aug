import { NextFunction, Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import categoriesModel from "../models/categoriesModel";
import { Categories } from "../interfaces/categories";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refactorHandling";

export const getAllCategories = getAll<Categories>(categoriesModel, 'categories');
export const createCategory = createOne<Categories>(categoriesModel);
export const getCategory = getOne<Categories>(categoriesModel);
export const updateCategory = updateOne<Categories>(categoriesModel)
export const deleteCategory = deleteOne<Categories>(categoriesModel)