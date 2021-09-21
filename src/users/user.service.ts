import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { User } from './entities/user.entity'
import { CreateUserDTO } from './dto/create-user.dto'
import * as bcrypt from 'bcrypt'
import { badRequestException } from '../helpers/controller-helper'

@Injectable()
export class UserService {
  constructor (@Inject('USER_MODEL') private userModel: Model<User>) { }

  async getByEmail (email: string): Promise<User> {
    const user = await this.userModel.findOne({ email })
    if (user) {
      return user
    }
    return null
  }

  async create (userData: CreateUserDTO): Promise<User> {
    if (userData.password !== userData.passwordConfirmation) {
      throw badRequestException()
    }
    const saltRounds = 12
    const hashedPassword = bcrypt.hashSync(userData.password, saltRounds)
    delete userData.passwordConfirmation
    userData.password = hashedPassword
    const userExists = await this.userModel.findOne({ email: userData.email })
    if (!userExists) {
      const createdUser = await this.userModel.create(userData)
      createdUser.password = '***'
      return createdUser
    } else {
      throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST)
    }
  }
}
