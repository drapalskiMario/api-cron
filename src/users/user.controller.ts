import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common'
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger'
import { responses } from '../helpers/controller-helper'
import { CreateUserDTO } from './dto/create-user.dto'
import { UserService } from './user.service'

@ApiTags('#Users')
  @Controller('api/v1/users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @ApiCreatedResponse()
  @ApiBadRequestResponse({ description: 'invalid params error' })
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @Post()
  async create (@Body() userData: CreateUserDTO) {
    if (userData.email && userData.password && userData.passwordConfirmation) {
      return await this.userService.create(userData)
    }
    throw new HttpException('invalid params error', HttpStatus.BAD_REQUEST)
  }
}
