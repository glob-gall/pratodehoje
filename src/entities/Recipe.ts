import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import Ingredient from './Ingredient'
import User from './User'

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  time: number

  @Column()
  method: string

  @Column()
  image_url: string

  @OneToMany(() => Ingredient, ingredient => ingredient.recipe)
  ingredients: Ingredient[]

  @ManyToOne(() => User, user => user.recipes)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string

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
