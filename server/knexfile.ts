import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'budget',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'budget',
  },
  migrations: {
    directory: './src/database/migrations',
    extension: 'ts',
  },
};

export default config;
