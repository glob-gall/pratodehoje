import Recipe from '../entities/Recipe'

interface ICreateRecipe{
  name:string,
  method:string,
  image_url:string,
  ingredients:string,
  equipaments:string
}

export default interface IRecipesRepository{
  create(data:ICreateRecipe):Promise<Recipe>
  find():Promise<Recipe[]>
}