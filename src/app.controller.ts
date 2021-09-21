import { Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { LoginDto } from './auth/dto/auth.dto'

@Controller('api/v1/')
export class AppController {
  constructor (
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @ApiTags('#Index')
  @ApiOkResponse({ description: 'REST Back-end Challenge 20201209 Running' })
  @Get()
  getMessage () {
    return this.appService.getMessage()
  }

  @ApiTags('#Login')
  @ApiUnauthorizedResponse()
  @ApiOkResponse()
  @ApiBody({ type: LoginDto })
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login (@Request() req: any) {
    return this.authService.login(req.user)
  }
}
