import loadEnvConfig from '../../../config';
import injectDependencies from '../../../config/app/dependency-injection';
import WinstonLogger from './Logger';

const logger = new WinstonLogger('Bootstrap');

(function boostrap() {
  logger.info('🚧 Starting boostrap process');

  loadEnvConfig();
  injectDependencies();

  logger.info('🏁 Finished bootsrap process');
})();
