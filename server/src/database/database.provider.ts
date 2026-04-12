import { ConfigService } from '@nestjs/config';
import knex, { Knex } from 'knex';

export const KNEX_CONNECTION = 'KNEX_CONNECTION';

export const databaseProviders = [
  {
    provide: KNEX_CONNECTION,
    inject: [ConfigService],
    useFactory: (config: ConfigService): Knex => {
      return knex({
        client: 'mysql2',
        connection: {
          host: config.get<string>('DB_HOST', 'localhost'),
          port: config.get<number>('DB_PORT', 3306),
          user: config.get<string>('DB_USER', 'budget'),
          password: config.get<string>('DB_PASSWORD', ''),
          database: config.get<string>('DB_NAME', 'budget'),
        },
      });
    },
  },
];
