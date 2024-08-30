import winston from 'winston';
import LokiTransport from 'winston-loki';

const logger = winston.createLogger({
  level: 'info',
  // format: winston.format.combine(
  //   winston.format.timestamp(),
  //   winston.format.json()
  // ),
  transports: [
    new LokiTransport({
      host: 'http://loki:3100',
      json: true,
      labels: { job: 'meet-devs-api' },
      format: winston.format.json(),
    }),
    // new winston.transports.Console({
    //   format: winston.format.combine(
    //     winston.format.colorize(),
    //     winston.format.simple()
    //   ),
    // }),
  ],
});

const logReqAndRes = (req, res, next) => {
  req.startTime = Date.now();
  logger.info('Received request', {
    method: req.method,
    url: req.originalUrl,
    userId: req?.user?.id || 'anonymous',
    body: req.body,
  });

  res.on('finish', () => {
    logger.info('Response sent', {
      method: req.method,
      url: req.originalUrl,
      userId: req?.user?.id || 'anonymous',
      statusCode: res.statusCode,
      // duration: Date.now() - req.startTime,
    });
  });

  next();
};

export { logReqAndRes };

export default logger;
