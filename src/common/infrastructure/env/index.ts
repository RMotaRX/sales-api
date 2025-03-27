import { AppError } from '@/common/domain/app-error';
import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  API_URL: z.string().default('http://localhost:3000'),
  DATABASE_TYPE: z.literal('postgres').default('postgres'),
  DATABASE_HOST: z.string().default('localhost'),
  DATABASE_PORT: z.coerce.number().default(5435),
  DATABASE_SCHEMA: z.string().default('public'),
  DATABASE_USERNAME: z.string().default('root'),
  DATABASE_PASSWORD: z.string().default('postgres'),
  DATABASE_NAME: z.string().default('vendas'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format());

  throw new AppError('Invalid environment variables.');
}

export const env = _env.data;
