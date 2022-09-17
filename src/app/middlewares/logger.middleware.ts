import { Container } from 'typedi';
import morgan from 'morgan';
import WinstonLogger from '../../Shared/domain/Logger';

const logger: WinstonLogger = Container.get('Shared.Logger');

const format = '[:method] [:url] [:remote-addr] [:status] [:res[content-length]] [:response-time ms]';

const removeLineBreaks = (string: string): string => string.replace(/[\r\n]/gm, '');

const stream = {
  write: (message: string) => {
    const line = removeLineBreaks(message);
    return logger.http(line);
  },
};

export default morgan(format, { stream });
  