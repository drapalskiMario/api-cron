import { Module } from '@nestjs/common'
import { LauncherService } from './launcher.service'
import { LauncherController } from './launcher.controller'
import { DatabaseModule } from 'src/database/database.module'
import { launcherProviders } from './launcher.providers'

@Module({
  imports: [DatabaseModule],
  providers: [
    LauncherService,
    ...launcherProviders
  ],
  controllers: [LauncherController],
  exports: [LauncherService, ...launcherProviders]
})
export class LauncherModule {}
