import Ingredient from 'entities/Ingredient'

interface ICreateRecipeDTO {
  name: string
  time: number
  method: string
  ingredients: Ingredient[]
  equipaments: string
  user_id: string
}
export { ICreateRecipeDTO }
