import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Launchers API')
    .setVersion('0.0.1')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt-token'
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('documentation', app, document)

  await app.listen(process.env.PORT)
}
bootstrap()
