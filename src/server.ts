import 'reflect-metadata'

import express from 'express'
import routes from './http/routes'

const app = express()

app.use(routes)

app.listen(3333, () => {
  console.log('✨server iniciado')
})
