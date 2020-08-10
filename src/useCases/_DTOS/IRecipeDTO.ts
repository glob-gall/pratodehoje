import Ingredient from 'entities/Ingredient'

interface IRecipeDTO {
  name: string
  method: string[]
  image_url: string
  ingredients: Ingredient[]
  equipaments: string
}

export { IRecipeDTO }
