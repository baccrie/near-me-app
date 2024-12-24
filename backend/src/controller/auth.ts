import {Request, Response} from 'express'
import User from '../models/User'

export function register (req: Request, res: Response) {
  const {email, username} = req.body;
  const userExist = User.findOne({email, username});

  res.status(200).json({
    status: 'Rgistered'
  })
}