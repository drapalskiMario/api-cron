import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common'
import { Launcher } from './entities/Launcher.entity'
import { LauncherService } from './launcher.service'

@Controller('launchers')
export class LauncherController {
  constructor (private readonly launcherService: LauncherService) {}

  @Post()
  async create (@Body() body: Launcher) {
    return await this.launcherService.create(body)
  }

  @Get()
  async findAll (): Promise<Launcher[]> {
    return await this.launcherService.find()
  }

  @Get(':id')
  async findOne (@Param('id') id: string): Promise<Launcher> {
    return await this.launcherService.findById(id)
  }

  @Put(':id')
  async update (@Param('id') id: string, @Body() body: Launcher): Promise<Launcher> {
    return await this.launcherService.update(id, body)
  }

  @Delete(':id')
  async delete (@Param('id') id: string) {
    return await this.launcherService.remove(id)
  }
}
