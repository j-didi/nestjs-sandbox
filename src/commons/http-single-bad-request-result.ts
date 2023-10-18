import { ApiProperty } from '@nestjs/swagger';

export class HttpSingleBadRequestResult {
  @ApiProperty({ example: 'Invalid action!' })
  message: string;

  @ApiProperty({ example: 'Bad Request' })
  error: string;

  @ApiProperty({ example: 400 })
  statusCode: number;
}
