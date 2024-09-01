import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dbConnection from './config/db';
import categoriesRoute from './routes/categoriesRoute';
const app: express.Application = express()
app.use(express.json())
dotenv.config()

dbConnection()
app.use('/api/v1/categories', categoriesRoute)
app.listen(process.env.PORT, () => {
  console.log(`App is listen on port ${process.env.PORT}`);
})