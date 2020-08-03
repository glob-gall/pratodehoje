import 'reflect-metadata'

import './database'
import './container'
import express, { Request, Response, NextFunction } from 'express'
import routes from './routes'
import 'express-async-errors'

import AppError from './utils/errors/AppError'

const app = express()

app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }
  console.log(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  })
})

app.listen(3333, () => {
  console.log('✨server iniciado')
})
