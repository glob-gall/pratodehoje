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
import { Exclude, Expose } from 'class-transformer'
import Ingredient from './Ingredient'
import User from './User'
import uploadConfig from '../config/upload'

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
  image_url?: string

  @Expose({ name: 'avatar_url' })
  getAvatar_url(): string | null {
    if (!this.image_url) {
      return null
    }

    switch (uploadConfig.driver) {
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.image_url}`
      default:
        return null
    }
  }

  @ManyToMany(type => Ingredient)
  @JoinTable()
  // @JoinColumn({ name: 'recipesId' })
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
