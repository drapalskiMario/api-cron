import { HttpException, HttpStatus } from '@nestjs/common'

export const notFoundException = () => (
  new HttpException('launcher by this id not found', HttpStatus.NOT_FOUND)
)

export const badRequestException = () => (
  new HttpException('invalid params error', HttpStatus.BAD_REQUEST)
)

export const responses = {
  serverError: 'Internal server error',
  notFoundById: 'launcher by this id not found',
  unauthorized: 'Unauthorized'
}
