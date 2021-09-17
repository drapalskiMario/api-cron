import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello () {
    return { message: 'REST Back-end Challenge 20201209 Running' }
  }
}
