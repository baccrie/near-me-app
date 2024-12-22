import { error } from "console";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export default function errorHandler(req:Request, res: Response, next: NextFunction){
  console.log(error)
  
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: 'error',
  })

}