import { StatusCodes } from "http-status-codes"
import {Request, Response} from 'express'

export default function notFound(req:Request, res: Response) {
  res.status(StatusCodes.NOT_FOUND).json({
    status: 'error',
    message: `Resource with url ${req.originalUrl} not found`
  })
}