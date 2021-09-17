import { Document } from 'mongoose'

export class Launcher extends Document {
  id: string
  url: string
  launch_library_id: number
  slug: string
  name: string
  status: {
    id: number
    name: string
  }

  net: Date
  window_end: Date
  window_start: Date
  inhold: boolean
  tbdtime: boolean
  tbddate: boolean
  probability: string
  holdreason: string
  failreason: string
  hashtag: string

  launch_service_provider: {
    id: number
    url: string
    name: string
    type: string
  }

  rocket: {
    id: number
    configuration: {
      id: number
      launch_library_id: number
      url: string
      name: string
      family: string
      full_name: string
      variant: string
    }
  }

  mission: {
    id: number
    launch_library_id: number
    name: string
    description: string
    launch_designator: string
    type: string
    orbit: {
      id: number
      name: string
      abbrev: string
    }
  }

  pad: {
    id: number
    url: string
    agency_id: number
    name: string
    info_url: string
    wiki_url: string
    map_url: string
    latitude: number
    longitude: number
    location: {
      id: number
      url: string
      name: string
      country_code: string
      map_image: string
      total_launch_count: number
      total_landing_count: number
    }
    map_image: string
    total_launch_count: number
  }

  webcast_live: boolean
  image: string
  infographic: string
  program: []
  imported_t: Date
  status_: 'draft' | 'trash' | 'published'
}
