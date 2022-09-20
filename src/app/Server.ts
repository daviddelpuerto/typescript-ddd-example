import { Container } from 'typedi';
import compress from 'compression';
import express, { Express } from 'express';
import helmet from 'helmet';
import * as http from 'http';
import router from './routes';
import loggerMiddleware from './middlewares/logger.middleware';
import WinstonLogger from '../Shared/infrastructure/Logger';
import { AppDataSource } from '../Shared/infrastructure/persistence/mysql/connection';

export class Server {
  private express: Express;

  readonly port: string;

  private logger: WinstonLogger;

  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.logger = Container.get('Shared.Logger');
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    this.express.use(loggerMiddleware);
    this.express.use(router);
  }

  async listen(): Promise<void> {
    return new Promise((resolve, reject) => {
      AppDataSource
        .initialize()
        .then(() => {
          this.logger.info('⚡ Database connection is ready');

          this.httpServer = this.express.listen(this.port, () => {
            this.logger.info(`🚀 Server listening on port: [${this.port}]`);
            this.logger.info(`   Running environment: [${this.express.get('env')}]`);
            this.logger.info('      Press CTRL-C to stop\n');
            resolve();
          });

        }).catch(reject);
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}