import loadEnvConfig from '../../../config';
import injectDependencies from '../../../config/app/dependency-injection';
import Logger from './Logger';
import createDatabaseConnection from './persistence/mysql/connection';

const logger = new Logger('Bootstrap');

(function boostrap() {
  logger.info('🚧 Starting boostrap process');

  loadEnvConfig();
  injectDependencies();
  createDatabaseConnection();

  logger.info('🏁 Finished bootsrap process\n');
})();
