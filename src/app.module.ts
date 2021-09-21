import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LauncherModule } from './launchers/launcher.module'
import { ScheduleModule } from '@nestjs/schedule'
import { CronModule } from './cronJobs/cron.module'
import { UserModule } from './users/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    LauncherModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    CronModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],

  providers: [AppService]
})
export class AppModule { }
