import Ingredient from 'entities/Ingredient'

interface IRecipeDTO {
  name: string
  time: number
  method: string[]
  image_url: string
  ingredients: Ingredient[]
  equipaments: string
}

export { IRecipeDTO }
