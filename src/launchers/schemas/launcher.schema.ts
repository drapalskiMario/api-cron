import * as mongoose from 'mongoose'

export const LauncherSchema = new mongoose.Schema({
  id: String,
  url: String,
  launch_library_id: Number,
  slug: String,
  name: String,
  status: {
    id: Number,
    name: String
  },
  net: Date,
  window_end: Date,
  window_start: Date,
  inhold: Boolean,
  tbdtime: Boolean,
  tbddate: Boolean,
  probability: String,
  holdreason: String,
  failreason: String,
  hashtag: String,
  launch_service_provider: {
    id: Number,
    url: String,
    name: String,
    type: { type: String }
  },
  rocket: {
    id: Number,
    configuration: {
      id: Number,
      launch_library_id: Number,
      url: String,
      name: String,
      family: String,
      full_name: String,
      variant: String
    }
  },
  mission: {
    id: Number,
    launch_library_id: Number,
    name: String,
    description: String,
    launch_designator: String,
    type: { type: String },
    orbit: {
      id: Number,
      name: String,
      abbrev: String
    }
  },
  pad: {
    id: Number,
    url: String,
    agency_id: Number,
    name: String,
    info_url: String,
    wiki_url: String,
    map_url: String,
    latitude: Number,
    longitude: Number,
    location: {
      id: Number,
      url: String,
      name: String,
      country_code: String,
      map_image: String,
      total_launch_count: Number,
      total_landing_count: Number
    },
    map_image: String,
    total_launch_count: Number
  },
  webcast_live: Boolean,
  image: String,
  infographic: String,
  program: [],
  imported_t: Date,
  status_: { type: String, enum: ['draft', 'trash', 'published'] }
})
