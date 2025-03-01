import { interval } from 'rxjs';
import { createLogger, format, transports } from 'winston';
export default () => {
  const logger = createLogger({
    level: 'info',
    format: format.json(),
    // format.combine(
    //   format.timestamp({
    //     format: 'YYYY-MM-DD HH:mm:ss'
    //   }),
    //   format.errors({ stack: true }),
    //   format.splat(),
    //   format.json()
    // ),
    // defaultMeta: { service: 'default' },
    transports: [
      // new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
      // new transports.File({ filename: 'quick-start-combined.log' }),
      // new transports.File({ filename: 'd:/workspace/demo-node/quick-start-combined.log' }),
      new transports.Console()
    ]
  });

  const log$ = interval(5000);
  log$.subscribe(value => {
    logger.info(`[${value}][${new Date()}]`,{ Class: 'TestClass' });
  });
}
