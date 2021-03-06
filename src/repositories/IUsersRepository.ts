import User from '../entities/User'
import { ICreateUserDTO } from './DTOS/ICreateUserDTO'

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>
  findUser(id: string): Promise<User | undefined>
  findUserByEmail(id: string): Promise<User | undefined>
  findAll(userId: string): Promise<User[]>
  find(id: string): Promise<User | undefined>
  save(user: User): Promise<User>
}
