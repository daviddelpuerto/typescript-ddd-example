import { DataSource } from 'typeorm';
import config from './config';
import UserEntity from './entities/User.entity';
import SharedLogger from '../../Logger';

const logger = new SharedLogger('Database');

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

export default async function createDatabaseConnection(): Promise<void> {
  return new Promise((resolve) => {
    logger.info('🔌 Creating database connection...');
    const createDatabaseConnectionInterval = setInterval(async () => {
    
      try {
        await AppDataSource.initialize();
        logger.info('✔️  Database connection is ready');
        clearInterval(createDatabaseConnectionInterval);
        resolve();
      } catch (error: any) {
        logger.error(error);
      }

    }, 5000);
  });
}