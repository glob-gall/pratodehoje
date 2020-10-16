interface ICreateRecipeDTO {
  name: string
  time: number
  method: string[]
  ingredientsNames: string[]
  equipaments: string
  user_id: string
}

export { ICreateRecipeDTO }
