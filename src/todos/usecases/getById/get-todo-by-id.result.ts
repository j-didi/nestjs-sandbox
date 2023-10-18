import { TodoStatus } from '../../todo-status.enum';
import { Todo } from '../../todo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class GetTodoByIdResult {
  @ApiProperty({ example: randomUUID() })
  readonly id: string;

  @ApiProperty({ example: 'My first todo!' })
  readonly description: string;
  readonly status: TodoStatus;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.description = todo.description;
    this.status = todo.status;
  }
}
