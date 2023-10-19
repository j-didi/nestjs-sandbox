import {
  applyDecorators,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpNotFoundResult } from './http-not-found-result';
import { HttpBadRequestResult } from './http-bad-request-result';
import { BadRequestExceptionFilter } from './bad-request-exception-filter';

export function ApiController(path: string) {
  return applyDecorators(ApiTags('Todos'), Controller(path.toLowerCase()));
}

export function CustomGetById(path: string) {
  return applyDecorators(
    Get(path),
    ApiNotFoundResponse({
      description: 'Record not found',
      type: HttpNotFoundResult,
    }),
  );
}

export function CustomPost(path?: string) {
  return applyDecorators(
    Post(path),
    UseFilters(new BadRequestExceptionFilter()),
    ApiBadRequestResponse({
      description: 'Invalid input',
      type: HttpBadRequestResult,
    }),
  );
}

export function CustomPut(path?: string) {
  return applyDecorators(
    Put(path),
    ApiOkResponse({ description: 'Success' }),
    UseFilters(new BadRequestExceptionFilter()),
    ApiNotFoundResponse({
      description: 'Record not found',
      type: HttpNotFoundResult,
    }),
    ApiBadRequestResponse({
      description: 'Breaking business rules',
      type: HttpBadRequestResult,
    }),
  );
}

export function CustomDelete(path?: string) {
  return applyDecorators(
    Delete(path),
    UseFilters(new BadRequestExceptionFilter()),
    ApiOkResponse({ description: 'Success' }),
    ApiNotFoundResponse({
      description: 'Record not found',
      type: HttpNotFoundResult,
    }),
  );
}
