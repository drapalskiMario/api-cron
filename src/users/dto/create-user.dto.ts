import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDTO {
  @ApiProperty()
  email!: string

  @ApiProperty()
  password!: string

  @ApiProperty()
  passwordConfirmation!: string
}
