import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import notFound from './controller/notFound';
import errorHandler from './controller/errorHandler';
import User from "./models/User"

// Import routers
import authRouter from './routes/auth';

// security packages
import helmet from 'helmet';
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import mongoose, { Mongoose } from 'mongoose';
// import xss from 'xss-clean'

// Env var
dotenv.config({path: './.env'})

const app = express();
const PORT = 3000;

app.use(helmet())
// app.use(xss())
app.use(cors())
app.use(mongoSanitize())

// Middleware
app.use(express.json());
app.use(express.static('./public'))

// Routes
app.get('/', (req, res, next)=> {
  res.status(StatusCodes.OK).json({
    status: 'working...'
  })
})

// auth
app.use('/api/v1', authRouter)

// Not found and Error Handler
app.use('*', notFound)
app.use(errorHandler)

// Start Server
const startApp = async ()=>{
  try {
  await connectDB( `${process.env.URL}`)
  await mongoose.connection.dropDatabase();
  await User.create({username: 'baccrie', email: 'test@gmail.com'});
  app.listen(process.env.PORT, ()=> console.log(`app is listening to port ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}

startApp()