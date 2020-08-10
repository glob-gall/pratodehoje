import Ingredient from 'entities/Ingredient'

interface ICreateRecipeDTO {
  name: string
  method: string
  image_url: string
  ingredients: Ingredient[]
  equipaments: string
}
export { ICreateRecipeDTO }
