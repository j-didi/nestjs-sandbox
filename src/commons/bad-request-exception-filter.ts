import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();

    if (typeof exceptionResponse.message === 'string') {
      return response.status(status).json({
        fails: [
          {
            field: 'default',
            errors: [exceptionResponse.message],
          },
        ],
      });
    } else {
      response.status(status).json({
        fails: exceptionResponse.message,
      });
    }
  }
}
