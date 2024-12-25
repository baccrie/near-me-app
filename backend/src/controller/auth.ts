import {NextFunction, Request, Response} from 'express'
import User from '../models/User'
import { StatusCodes } from 'http-status-codes';

export function register (req: Request, res: Response) {
  const {email, username} = req.body;
  const user = User.create({email, username})


  res.status(200).json({
    status: 'successful',
    user: {...user}
  })
}


export async function checkExistence(req: Request, res: Response, next:NextFunction) {
  const {username, email} = req.query;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  console.log(user)

  if (user) {
    res.status(200).json({
      exists: true,
      field: user.username === username ? 'username' : 'email'
    })

    return;
  }

  res.status(200).json({
    exists: false
  })
}