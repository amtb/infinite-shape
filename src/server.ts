import cors from 'cors';
import express from 'express';
import * as log4js from 'log4js';
import * as swaggerUI from 'swagger-ui-express';
import openApi from '../openapi.json';
import { drawShape } from './drawer';
import { validate } from './validators';

const app = express();

// middlewares
log4js.configure({
  appenders: {
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' }
  }
 });
const logger = log4js.getLogger('app');
app.use(log4js.connectLogger(logger, {format: ':method :url :status'}));

// enable cors
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:4200').split(',');
logger.info(`Allowed origins: ${allowedOrigins.join()}`);

app.use(cors({
  origin: allowedOrigins
}));

// list to GET /shape
app.get('/shape', (request: express.Request, response: express.Response) => {
  const {w, h, p} = request.query;

  const errors = validate(w, h, p);
  if (errors.length) {
    response.status(400).send({errors});
  }
  else {
    const shape = drawShape(w, h, p);
    response.send({shape});
  }
});

// serve the swagger ui at the root
app.use('/', swaggerUI.serve, swaggerUI.setup(openApi));

// fire it up
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => logger.info(`Server running on port ${port}`));