import { ApiProperty } from '@nestjs/swagger';

export class HttpNotFoundResult {
  @ApiProperty({ example: 'Item with id # not found!' })
  message: string;

  @ApiProperty({ example: 'Not Found' })
  error: string;

  @ApiProperty({ example: 404 })
  statusCode: number;
}
