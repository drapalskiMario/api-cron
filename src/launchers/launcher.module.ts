import { Module } from '@nestjs/common'
import { LauncherService } from './launcher.service'
import { LauncherController } from './launcher.controller'
import { DatabaseModule } from '../database/database.module'
import { launcherProviders } from './launcher.providers'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [
    LauncherService,
    ...launcherProviders
  ],
  controllers: [LauncherController],
  exports: [LauncherService, ...launcherProviders]
})
export class LauncherModule {}
