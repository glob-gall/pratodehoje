import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import Recipe from './Recipe'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  avatar: string

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string

  @OneToMany(() => Recipe, recipe => recipe.user, { eager: true })
  recipes: Recipe[]

  @CreateDateColumn()
  @Exclude()
  created_at: Date

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date
}

export default User
