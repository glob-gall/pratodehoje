import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import Ingredient from './Ingredient'

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  method: string

  @Column()
  image_url: string

  @OneToMany(() => Ingredient, ingredient => ingredient.recipe)
  ingredients: Ingredient[]

  @Column()
  equipaments: string

  @CreateDateColumn()
  @Exclude()
  created_at: Date

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date
}

export default Recipe
