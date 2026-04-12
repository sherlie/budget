import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const body = exception.getResponse() as Record<string, unknown>;

      if (
        typeof body === 'object' &&
        'error' in body &&
        'message' in body
      ) {
        response.status(status).send(body);
      } else {
        response.status(status).send({
          error: 'BAD_REQUEST',
          message: String(body),
        });
      }
    } else {
      this.logger.error('Unhandled exception', exception);
      response.status(500).send({
        error: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred',
      });
    }
  }
}
