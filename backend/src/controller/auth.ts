import {Request, Response} from 'express'
import User from '../models/User'

export function register (req: Request, res: Response) {
  res.status(200).json({
    status: 'success...'
  })
}