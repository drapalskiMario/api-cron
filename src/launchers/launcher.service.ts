import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { Launcher } from './entities/Launcher.entity'

@Injectable()
export class LauncherService {
  constructor (@Inject('LAUNCHER_MODEL') private launcherModel: Model<Launcher>) {}

  async create (dataLauncher: Launcher): Promise<Launcher> {
    if (!dataLauncher.imported_t) dataLauncher.imported_t = new Date()
    if (!dataLauncher.status_) dataLauncher.status_ = 'published'
    return await this.launcherModel.create(dataLauncher)
  }

  async update (id: string, dataLauncher: Launcher): Promise<Launcher> {
    const launcher = await this.launcherModel.findOneAndUpdate(
      { id },
      { $set: { dataLauncher } },
      { new: true }
    ).exec()
    return launcher
  }

  async find (limit?: number, offset?: number) {
    return await this.launcherModel.find().limit(limit).skip(offset).sort({ _id: -1 }).exec()
  }

  async findById (id: string) {
    return await this.launcherModel.findOne({ id }).exec()
  }

  async remove (id: string) {
    const remove = await this.launcherModel.deleteOne({ id })
    return remove.deletedCount
  }
}
