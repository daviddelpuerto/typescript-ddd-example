import { DataSource } from 'typeorm';
import config from './config';
import UserEntity from './entities/User.entity';

const {
  database,
  username,
  password,
  host,
  port,
} = config;

export const AppDataSource = new DataSource({
  database,
  username,
  password,
  host,
  port,
  type: 'mysql',
  synchronize: false,
  logging: false,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});