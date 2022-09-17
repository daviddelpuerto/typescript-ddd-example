import { Service } from 'typedi';
import winston, { Logger as WinstonLoggerType } from 'winston';
import Logger from '../domain/Logger';

const level = 'debug';

const levels = {
  error: 0,
  info: 1,
  http: 2,
  debug: 3,
};

const colors = {
  error: 'red',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

@Service('Shared.Logger')
class WinstonLogger implements Logger {
  private logger: WinstonLoggerType;

  constructor() {
    winston.addColors(colors);

    this.logger = winston.createLogger({
      level,
      levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({ all: true }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] ${log.message}`),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/access.log' }),
      ],
    });
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  error(message: string | Error) {
    this.logger.error(message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  http(message: string) {
    this.logger.http(message);
  }
}

export default WinstonLogger;