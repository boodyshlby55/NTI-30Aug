import { NextFunction, Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import categoriesModel from "../models/categoriesModel";
import { Categories } from "../interfaces/categories";

export const getAllCategories = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const categories: Categories[] = await categoriesModel.find()
  res.status(200).json({ data: categories })
});

export const createCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category: Categories = await categoriesModel.create(req.body);
  res.status(201).json({ data: category })
});

export const getCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category: Categories | null = await categoriesModel.findById(req.params.id);
  res.status(200).json({ data: category })
});

export const updateCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category: Categories | null = await categoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({ data: category })
});
export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const category: Categories | null = await categoriesModel.findByIdAndDelete(req.params.id);
  res.status(204).json()
});