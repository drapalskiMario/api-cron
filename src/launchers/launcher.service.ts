import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { Launcher } from './entities/Launcher.entity'

@Injectable()
export class LauncherService {
  constructor (@Inject('LAUNCHER_MODEL') private launcherModel: Model<Launcher>) {}

  async create (dataLauncher: Launcher): Promise<Launcher> {
    return await this.launcherModel.create(dataLauncher)
  }

  async update (id: string, dataLauncher: Launcher): Promise<Launcher> {
    return await this.launcherModel.findOneAndUpdate(
      { id },
      { $set: { dataLauncher } },
      { new: true }
    ).exec()
  }

  async find () {
    return await this.launcherModel.find().exec()
  }

  async findById (id: string) {
    return await this.launcherModel.findOne({ id }).exec()
  }

  async remove (id: string) {
    return await this.launcherModel.deleteOne({ id })
  }
}
