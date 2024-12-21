import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res, next)=> {
  res.status(StatusCodes.OK).json({
    status: 'working...'
  })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
