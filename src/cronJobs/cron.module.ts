import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { LauncherModule } from 'src/launchers/launcher.module'
import { CronService } from './cron.service'

@Module({
  imports: [HttpModule, LauncherModule],
  providers: [CronService]
})
export class CronModule {}
