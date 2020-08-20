interface ICreateRecipeDTO {
  name: string
  time: number
  method: string[]
  image_url: string
  ingredientsNames: string[]
  equipaments: string
}

export { ICreateRecipeDTO }
