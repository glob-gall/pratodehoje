import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'

import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'
import { ICreateUserDTO } from '../_DTOS/ICreateUserDTO'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const hashPassword = await hash(password, 12)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    })

    return user
  }
}

export default CreateUserUseCase
