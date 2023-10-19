import { TodoStatus } from '../../todo-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID, UUID } from 'crypto';

export class GetTodoByIdResult {
  @ApiProperty({ example: randomUUID() })
  readonly id: string;

  @ApiProperty({ example: 'My first todo!' })
  readonly description: string;
  readonly status: TodoStatus;

  constructor(id: UUID, description: string, status: TodoStatus) {
    this.id = id;
    this.description = description;
    this.status = status;
  }
}
