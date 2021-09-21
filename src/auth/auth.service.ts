import { Injectable } from '@nestjs/common'
import { UserService } from '../users/user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async verifyPassword (password: string, hashedPassword: string) {
    const isPasswordMatching = bcrypt.compareSync(password, hashedPassword)
    if (isPasswordMatching) {
      return true
    } else {
      return false
    }
  }

  async validate (email: string, password: string) {
    const user = await this.userService.getByEmail(email)
    if (user) {
      const passwordIsCorrect = await this.verifyPassword(password, user.password)
      if (passwordIsCorrect) {
        user.password = '***'
        return user
      }
    }
    return null
  }

  async login (user: {_id: string, email: string, password: string}) {
    const payload = { id: user._id, email: user.email }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
