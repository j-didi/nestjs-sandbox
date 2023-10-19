import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoCommand {
  @ApiProperty({ example: 'My first todo!' })
  @IsString()
  @Length(3, 255)
  readonly description: string;
}
