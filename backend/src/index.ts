import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import notFound from './controller/notFound';
import errorHandler from './controller/errorHandler';
import User from "./models/User"
import fileUpload from 'express-fileupload';
import { uploadLocaleImages } from './controller/uploadImages';
import multer from 'multer';
import path from 'path';

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

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory where images will be stored
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});


// Set up file upload middleware
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 }, // 100MB max file size
  abortOnLimit: true,  // Abort the request if the file exceeds the limit
}));

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
app.post('/api/v1/upload-locale-images', uploadLocaleImages)

// Not found and Error Handler
app.use('*', notFound)
app.use(errorHandler)

// Start Server
const startApp = async () => {
  try {
  await connectDB( `${process.env.URL}`)
  await mongoose.connection.dropDatabase();
  await User.create({username: 'baccrie', email: 'test@gmail.com'});
  console.log('db connect success...')
  app.listen(process.env.PORT, ()=> console.log(`app is listening to port ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}

startApp()