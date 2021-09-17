import { Connection } from 'mongoose'
import { LauncherSchema } from './schemas/launcher.schema'

export const launcherProviders = [
  {
    provide: 'LAUNCHER_MODEL',
    useFactory: (connection: Connection) => connection.model('Launcher', LauncherSchema),
    inject: ['DATABASE_CONNECTION']
  }
]
