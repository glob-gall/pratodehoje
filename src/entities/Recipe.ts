import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
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

  // @ManyToMany(type => Ingredient, ingredient => ingredient.recipes, {
  //   eager: true,
  // })
  @ManyToMany(type => Ingredient, {
    eager: true,
  })
  @JoinTable()
  ingredients: Ingredient[]

  @ManyToOne(() => User, user => user.recipes)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string

  @CreateDateColumn()
  @Exclude()
  created_at: Date

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date
}

export default Recipe
