import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { JsonLogger } from './loggers/json.logger';
import { TSKVLogger } from './loggers/tskv.logger';
import { DevLogger } from './loggers/dev.logger';

const whitelist = [
  'http://localhost',
  'http://localhost:80',
  'http://osmaxfilm.nomorepartiessbs.ru',
  'http://osmaxfilm.nomorepartiessbs.ru:80',
  'https://osmaxfilm.nomorepartiessbs.ru:443',
  'https://osmaxfilm.nomorepartiessbs.ru',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(), {
    cors: {
      origin: function (origin, callback) {
        if (!origin) {
          console.log('no origin');
          callback(null, true);
          return;
        }
        if (whitelist.includes(origin)) {
          console.log(`allowed cors for origin: ${origin}`);
          callback(null, true);
          return;
        }
        callback(new Error(`blocked cors for origin: ${origin}`));
        return;
      },
      methods: ['PUT', 'POST', 'GET', 'OPTIONS'],
      credentials: true,
    },
    bufferLogs: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('afisha');
  app.useLogger(new DevLogger());
  app.useLogger(new JsonLogger());
  app.useLogger(new TSKVLogger());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
