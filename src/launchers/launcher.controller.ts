import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards, HttpCode, HttpException, Query } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { Launcher } from './entities/Launcher.entity'
import { notFoundException, responses } from '../helpers/controller-helper'
import { LauncherService } from './launcher.service'
import { LauncherSwagger } from './swagger/launcher.swagger'

@ApiTags('#Launchers')
@UseGuards(AuthGuard('jwt'))
@Controller('api/v1/launchers')
export class LauncherController {
  constructor (private readonly launcherService: LauncherService) {}

  @ApiBearerAuth('jwt-token')
  @ApiCreatedResponse()
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @ApiUnauthorizedResponse({ description: responses.unauthorized })
  @Post()
  async create (@Body() body: Launcher) {
    return await this.launcherService.create(body)
  }

  @ApiBearerAuth('jwt-token')
  @ApiOkResponse({ type: LauncherSwagger, isArray: true })
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @ApiUnauthorizedResponse({ description: responses.unauthorized })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiQuery({ name: 'offset', required: false, example: 0 })
  @Get()
  async findAll (@Query() query: {limit: string, offset: string}): Promise<Launcher[]> {
    return await this.launcherService.find(Number(query.limit), Number(query.offset))
  }

  @ApiBearerAuth('jwt-token')
  @ApiOkResponse({ type: LauncherSwagger })
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @ApiUnauthorizedResponse({ description: responses.unauthorized })
  @ApiNotFoundResponse({ description: responses.notFoundById })
  @Get(':id')
  async findOne (@Param('id') id: string): Promise<Launcher | HttpException> {
    const launcher = await this.launcherService.findById(id)
    if (launcher) {
      return launcher
    }
    throw notFoundException()
  }

  @ApiBearerAuth('jwt-token')
  @ApiOkResponse({ type: LauncherSwagger })
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @ApiNotFoundResponse({ description: responses.notFoundById })
  @ApiUnauthorizedResponse({ description: responses.unauthorized })
  @Put(':id')
  async update (@Param('id') id: string, @Body() body: Launcher): Promise<Launcher | HttpException> {
    const launcher = await this.launcherService.update(id, body)
    if (launcher) {
      return launcher
    }
    throw notFoundException()
  }

  @ApiBearerAuth('jwt-token')
  @ApiNoContentResponse()
  @ApiInternalServerErrorResponse({ description: responses.serverError })
  @ApiNotFoundResponse({ description: responses.notFoundById })
  @ApiUnauthorizedResponse({ description: responses.unauthorized })
  @HttpCode(204)
  @Delete(':id')
  async delete (@Param('id') id: string): Promise<void | HttpException> {
    const successfulDeletion = await this.launcherService.remove(id)
    if (!successfulDeletion) {
      throw notFoundException()
    }
  }
}
