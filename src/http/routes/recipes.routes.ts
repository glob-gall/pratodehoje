import {Router,Request,Response} from 'express'

const recipesRoutes = Router()

recipesRoutes.get('/',(request:Request,response:Response)=>{
  return response.json({
    get:'get'
  })
})

export default recipesRoutes