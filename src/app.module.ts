import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LauncherModule } from './launchers/launcher.module'
import { ScheduleModule } from '@nestjs/schedule'
import { CronModule } from './cronJobs/cron.module'

@Module({
  imports: [
    LauncherModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    CronModule
  ],
  controllers: [AppController],

  providers: [AppService]
})
export class AppModule {}
