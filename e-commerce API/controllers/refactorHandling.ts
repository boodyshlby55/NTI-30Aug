import { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Model } from 'mongoose';
import ApiErrors from '../utils/apiErrors';

export const getAll = <modelType>(model: Model<any>, modelName: string) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let filterData: any = {};
    if (req.filterData) {
      filterData = req.filterData
    }
    const documents: modelType[] = await model.find(filterData)
    res.status(200).json({ data: documents })
  });

export const getOne = <modelType>(model: Model<any>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const document: modelType | null = await model.findById(req.params.id);
    if (!document) { return next(new ApiErrors('Document not found', 404)) }
    res.status(200).json({ data: document })
  })

export const createOne = <modelType>(model: Model<any>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const document: modelType = await model.create(req.body);
    res.status(201).json({ data: document })
  })

export const updateOne = <modelType>(model: Model<any>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const document: modelType | null = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!document) { return next(new ApiErrors('Document not found', 404)) }
    res.status(200).json({ data: document })
  })

export const deleteOne = <modelType>(model: Model<any>) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const document: modelType | null = await model.findByIdAndDelete(req.params.id);
    if (!document) { return next(new ApiErrors('Document not found', 404)) }
    res.status(204).json()
  })

