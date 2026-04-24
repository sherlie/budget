import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AppBadRequestException } from './common/exceptions/app-exceptions';
import { ValidationError } from 'class-validator';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from './database/database.provider';

function formatValidationErrors(errors: ValidationError[]): string {
  return errors
    .flatMap((e) => Object.values(e.constraints ?? {}))
    .join('; ');
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors();

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) =>
        new AppBadRequestException(formatValidationErrors(errors)),
    }),
  );

  const knex = app.get<Knex>(KNEX_CONNECTION);
  await knex.migrate.latest({
    directory: __dirname + '/database/migrations',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
}

bootstrap();
