import { DynamicModule, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';

import { configProvider } from './app.config.provider';
import { FilmsController } from './films/films.controller';
import { FilmsService } from './films/films.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { FilmsMongoRepository } from './repository/films-mongo.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from './schemas/films.schema';
import { FilmsPgRepository } from './repository/films-pg.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './films/entities/films.entity';
import { Schedule } from './films/entities/schedule.entity';

@Module({})
export class AppModule {

  static forRoot(): DynamicModule {

    let databaseProvider, databaseModules;

    const databaseParams = configProvider.useValue.database;
    if (configProvider.useValue.database.driver === 'postgres') {

      databaseModules = [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: databaseParams.host,
          port: parseInt(databaseParams.port),
          username: databaseParams.username,
          password: databaseParams.password,
          database: databaseParams.name,
          entities: [Film, Schedule],
          migrations: [path.join(__dirname, '/src/database/migrations/**/*{.ts,.js}')]
        }),
        TypeOrmModule.forFeature([Film, Schedule])
      ]

      databaseProvider = {
        provide: 'FilmsRepository',
        useClass: FilmsPgRepository
      }
    }

    if (configProvider.useValue.database.driver === 'mongodb') {

      const databaseUrl = `${databaseParams.host}:${databaseParams.port}/${databaseParams.name}`

      databaseModules = [
        MongooseModule.forRoot(databaseUrl),
        MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }])
      ]
      
      databaseProvider = {
        provide: 'FilmsRepository',
        useClass: FilmsMongoRepository
      }
    }

    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
        }),
        ServeStaticModule.forRoot({
          rootPath: path.join(__dirname, '..', '..', 'public'),
        }),
        ...databaseModules
      ],
      controllers: [FilmsController, OrderController],
      providers: [configProvider, FilmsService, OrderService, databaseProvider],
    }
  }
}
