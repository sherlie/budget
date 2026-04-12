import { HttpException, HttpStatus } from '@nestjs/common';

export class AppBadRequestException extends HttpException {
  constructor(message: string) {
    super({ error: 'BAD_REQUEST', message }, HttpStatus.BAD_REQUEST);
  }
}

export class AppNotFoundException extends HttpException {
  constructor(message: string) {
    super({ error: 'NOT_FOUND', message }, HttpStatus.NOT_FOUND);
  }
}

export class AppInternalErrorException extends HttpException {
  constructor() {
    super(
      { error: 'INTERNAL_ERROR', message: 'An unexpected error occurred' },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
