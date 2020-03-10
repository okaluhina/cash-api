import dotenv from 'dotenv';

import { devSchema, testSchema } from '../validation/env.validation';

const DOT_ENV_FILE = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.local';

const schema = process.env.NODE_ENV === 'development' ? devSchema : testSchema;

dotenv.config({ path: DOT_ENV_FILE });

const { error: validationError, value: envVars } = schema.validate(process.env);

if (validationError) {
  throw new Error(`Config validation error: ${validationError.message}`);
}

export default {
  app: {
    environment: envVars.NODE_ENV,
    port: envVars.APP_PORT,
    clientUri: envVars.CLIENT_URI
  }
};
