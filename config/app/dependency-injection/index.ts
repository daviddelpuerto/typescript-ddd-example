import { Container } from 'typedi';
import dependencies from './dependencies';
import WinstonLogger from '../../../src/Shared/infrastructure/Logger';

const logger = new WinstonLogger('Dependency-Injection');

export default function injectDependencies() {
  logger.info('💉 Starting dependency injection');

  Object.entries(dependencies).forEach(([key, value]) => {
    const dependencyEntries = Object.entries(value);
    
    dependencyEntries.forEach(([entryKey, entryValue]) => {
      const dependencyKey = `${key}.${entryKey}`;

      Container.set(dependencyKey, entryValue);
      logger.info(`✔️  Registered {${dependencyKey}}`);
    }); 
  });
}