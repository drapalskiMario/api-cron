import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { lastValueFrom } from 'rxjs'
import { Launcher } from 'src/launchers/entities/Launcher.entity'
import { LauncherService } from 'src/launchers/launcher.service'

@Injectable()
export class CronService {
  constructor (
    private httpService: HttpService,
    private lancherService: LauncherService
  ) { }

  @Cron('0 0 23 * * *')
  async updateDataSet () {
    for (let offset = 0; offset <= 1900; offset += 0) {
      const bufferData = this.httpService
        .get(`https://ll.thespacedevs.com/2.0.0/launch/?format=json&limit=100&offset=${offset}`)
        .pipe()

      const launchers = await lastValueFrom(bufferData)

      launchers.data.forEach(async (launcher: Launcher) => {
        launcher.imported_t = new Date()
        launcher.status_ = 'published'
        await this.lancherService.update(launcher.id, launcher)
      })

      offset += 100
    }
  }
}
