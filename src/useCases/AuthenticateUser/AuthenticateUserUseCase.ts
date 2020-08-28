import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import auth from '../../config/auth'
import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../entities/User'
import { IAuthenticateUserDTO } from '../_DTOS/IAuthenticateUserDTO'
import AppError from '../../utils/errors/AppError'

interface Response {
  user: User
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    password,
  }: IAuthenticateUserDTO): Promise<Response> {
    const user = await this.usersRepository.findUserByEmail(email)
    if (!user) {
      throw new AppError('Incorrect email/password combination')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Incorrect email/password combination')
    }

    const { expiresIn, secret } = auth.jwt
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })
    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserUseCase
