import joi from '@hapi/joi';

export const devSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid('development', 'test', 'production', 'local')
      .required(),
    APP_PORT: joi.number().required()
  })
  .unknown()
  .required();

export const testSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid('development', 'test', 'production', 'local')
      .required(),
    APP_PORT: joi.number().required()
  })
  .unknown()
  .required();
