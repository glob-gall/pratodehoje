import { getRepository, Repository, Not } from 'typeorm'
import User from '../../entities/User'
import IUsersRepository from '../IUsersRepository'
import { ICreateUserDTO } from '../DTOS/ICreateUserDTO'

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async create(user: ICreateUserDTO): Promise<User> {
    const newUser = this.ormRepository.create(user)
    await this.ormRepository.save(newUser)
    return newUser
  }

  public async findAllUsers(): Promise<User[]> {
    const users = await this.ormRepository.find({
      relations: ['recipes'],
    })

    return users
  }

  public async findUser(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(
      { id },
      {
        relations: ['recipes'],
      },
    )

    return user
  }

  public async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } })

    return user
  }

  public async find(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id, {
      relations: ['recipes'],
    })

    return user
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user)
  }
}

export default UsersRepository
