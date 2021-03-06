import 'reflect-metadata'
import './database'
import './container'
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import routes from './routes'

import AppError from './utils/errors/AppError'
import ratelimiter from './middlewares/Ratelimiter'

const app = express()

app.use(ratelimiter)
app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }
  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  })
})

app.listen(3333, () => {
  console.log('✨server iniciado')
})
