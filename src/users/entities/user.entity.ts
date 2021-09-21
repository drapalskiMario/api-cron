import { Document } from 'mongoose'

export class User extends Document {
  _id: string
  email: string
  password: string
}
