import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import Recipe from './Recipe'

@Entity('ingredients')
class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => Recipe, recipe => recipe.ingredients)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe

  @CreateDateColumn()
  @Exclude()
  created_at: Date

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date
}

export default Ingredient
