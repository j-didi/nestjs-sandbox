import { ApiProperty } from '@nestjs/swagger';

export class HttpBadRequestResult {
  fails: FailResult[];
}

export class FailResult {
  @ApiProperty({ example: 'description' })
  field: string;

  @ApiProperty({ example: ['description must be a string'] })
  errors: string[];
}
