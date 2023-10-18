import { randomUUID, UUID } from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoResult {
  @ApiProperty({ example: randomUUID() })
  readonly id: string;

  constructor(id: UUID) {
    this.id = id;
  }
}
