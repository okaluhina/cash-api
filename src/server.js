import app from './app';
import config from './config/environment';
import logger from './config/winston';

const {
  app: { port }
} = config;

const server = app.listen(process.env.PORT || port, () => {
  logger.info(`Server running on port ${port}`);
});
