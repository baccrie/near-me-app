import {NextFunction, Request, Response} from 'express'
import User from '../models/User'
import { StatusCodes } from 'http-status-codes';
import  error  from "../interface/error"
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID");

export async function register (req: Request, res: Response, next: NextFunction) {
  try {
  const {email, username} = req.body;
  const user = await User.create({email, username})

  console.log(user)

  res.status(200).json({
    status: 'successful',
    user
  })
  } catch(err: any) {
  next(err)  
}
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const token = req.body.token;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "YOUR_GOOGLE_CLIENT_ID",
    });

    const payload = ticket.getPayload();
    res.sendStatus(200).json({
      status: 'success'
    });
  } catch(error) {}
}

export async function checkEmailExistence(req: Request, res: Response, next:NextFunction) {
  const {email} = req.query;

  const user = await User.findOne({email});

  if (user) {
    res.status(200).json({
      exists: true,
    })

    return 
  }

  res.status(200).json({
    exists: false
  })
}

export async function checkUsernameExistence(req: Request, res: Response, next:NextFunction) {
  const {username} = req.query;

  const user = await User.findOne({username});

  if (user) {
    res.status(200).json({
      exists: true,
    })

    return;
  }

  res.status(200).json({
    exists: false
  })
}