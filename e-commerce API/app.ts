import { Server } from 'http';
import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db';
import mountRoutes from './routes';
const app: express.Application = express()
app.use(express.json())
app.use(express.static('uploads'))
dotenv.config()

dbConnection()
mountRoutes(app)
let server: Server;
server = app.listen(process.env.PORT, () => {
  console.log(`App is listen on port ${process.env.PORT}`);
})

process.on('unhandledRejection', (err: Error) => {
  console.error(`unhandledRejection Error : ${err.name} | ${err.message}`);
  server.close(() => {
    console.error('Application is shutting down...')
    process.exit(1);
  })
})