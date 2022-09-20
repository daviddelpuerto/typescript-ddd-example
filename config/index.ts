import dotenv from 'dotenv';
import WinstonLogger from '../src/Shared/infrastructure/Logger';

const logger = new WinstonLogger('ConfigLoader');

export default function loadEnvConfig() {
  const envConfig = dotenv.config();
  if (envConfig.error) {
    process.stderr.write('⚠️  Couldn\'t find .env file  ⚠️\n');
    process.stderr.write(`${envConfig.error}\n`);
    process.exit(1);
  }

  logger.info('✔️  Loaded env variables');
}