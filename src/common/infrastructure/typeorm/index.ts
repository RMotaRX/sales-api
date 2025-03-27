import { env } from './../env/index';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: env.DATABASE_TYPE,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  schema: env.DATABASE_SCHEMA,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: ['**/entities/**/*.ts'],
  migrations: ['**/migrations/**/*.ts'],
  synchronize: false,
  logging: false,
});
