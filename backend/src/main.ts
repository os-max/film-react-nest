import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { JsonLogger } from './loggers/json.logger';
import { TSKVLogger } from './loggers/tskv.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(), {
    bufferLogs: true
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  app.useLogger(new JsonLogger());
  app.useLogger(new TSKVLogger());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
