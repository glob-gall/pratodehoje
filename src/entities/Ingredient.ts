import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import Recipe from './Recipe'

@Entity('ingredients')
class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(type => Recipe, recipe => recipe.ingredients)
  recipes: Recipe[]

  @CreateDateColumn()
  @Exclude()
  created_at: Date

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date
}

export default Ingredient
