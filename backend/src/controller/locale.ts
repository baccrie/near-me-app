import { Request, Response, NextFunction } from 'express'

function getLocale(req: Request, res: Response, next: NextFunction){
  res.json({
    locale: {
      name: 'test'
    }
  })
}

export {getLocale};