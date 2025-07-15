import { configProvider } from 'src/app.config.provider';
import { DataSource } from 'typeorm';

const databaseParams = configProvider.useValue.database;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseParams.host,
  port: parseInt(databaseParams.port),
  username: databaseParams.username,
  password: databaseParams.password,
  database: databaseParams.name,
  entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/database/migrations/**/*{.ts,.js}'],
  synchronize: true
});