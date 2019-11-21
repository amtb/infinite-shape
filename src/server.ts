import express = require('express');
import {configure as configureLog4js, connectLogger, getLogger} from 'log4js';
import { drawShape } from './drawer';
import { validate } from './validators';

const app = express();

// middlewares
configureLog4js({
  appenders: {
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' }
  }
 });
const logger = getLogger('app');
app.use(connectLogger(logger, {format: ':method :url :status'}));

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

// fire it up
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => logger.info(`Server running on port ${port}`));