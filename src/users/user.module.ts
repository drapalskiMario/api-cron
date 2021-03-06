import { Module } from '@nestjs/common'
import { userProviders } from './user.providers'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders],
  exports: [UserService, ...userProviders],
  controllers: [UserController]
})
export class UserModule {}
