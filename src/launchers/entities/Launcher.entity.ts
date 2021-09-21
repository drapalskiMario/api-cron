/* eslint-disable no-unused-vars */
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

class LauncherSubStatus {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string
}

class LauncherSubServiceProvider {
  @ApiProperty()
  id: number

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  type: string
}

class LauncherSubRocketConfiguration {
  @ApiProperty()
  id: number

  @ApiProperty()
  launch_library_id: number

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  family: string

  @ApiProperty()
  full_name: string

  @ApiProperty()
  variant: string
}
class LauncherSubRocket {
  @ApiProperty()
  id: number

  @ApiProperty()
  configuration: LauncherSubRocketConfiguration
}

class LauncherSubMissionOrbit {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  abbrev: string
}
class LauncherSubMission {
  @ApiProperty()
  id: number

  @ApiProperty()
  launch_library_id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  launch_designator: string

  @ApiProperty()
  type: string

  @ApiProperty()
  orbit: LauncherSubMissionOrbit
}

class LauncherSubPadLocation {
  @ApiProperty()
  id: number

  @ApiProperty()
  url: string

  @ApiProperty()
  name: string

  @ApiProperty()
  country_code: string

  @ApiProperty()
  map_image: string

  @ApiProperty()
  total_launch_count: number

  @ApiProperty()
  total_landing_count: number
}

class LauncherSubPad {
  @ApiProperty()
  id: number

  @ApiProperty()
  url: string

  @ApiProperty()
  agency_id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  info_url: string

  @ApiProperty()
  wiki_url: string

  @ApiProperty()
  map_url: string

  @ApiProperty()
  latitude: number

  @ApiProperty()
  longitude: number

  @ApiProperty()
  location: LauncherSubPadLocation
}
export class Launcher extends Document {
  @ApiProperty()
  id: string

  @ApiProperty()
  url: string

  @ApiProperty()
  launch_library_id: number

  @ApiProperty()
  slug: string

  @ApiProperty()
  name: string

  @ApiProperty()
  status: LauncherSubStatus

  @ApiProperty()
  net: Date

  @ApiProperty()
  window_end: Date

  @ApiProperty()
  window_start: Date

  @ApiProperty()
  inhold: boolean

  @ApiProperty()
  tbdtime: boolean

  @ApiProperty()
  tbddate: boolean

  @ApiProperty()
  probability: string

  @ApiProperty()
  holdreason: string

  @ApiProperty()
  failreason: string

  @ApiProperty()
  hashtag: string

  @ApiProperty()
  launch_service_provider: LauncherSubServiceProvider

  @ApiProperty()
  rocket: LauncherSubRocket

  @ApiProperty()
  mission: LauncherSubMission

  @ApiProperty()
  pad: LauncherSubPad

  @ApiProperty()
  webcast_live: boolean

  @ApiProperty()
  image: string

  @ApiProperty()
  infographic: string

  @ApiProperty()
  program: []

  @ApiProperty()
  imported_t: Date

  @ApiProperty({ enum: ['draft', 'trash', 'published'] })
  status_: 'draft' | 'trash' | 'published'
}
