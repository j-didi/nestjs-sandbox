import { TodoStatus } from '../../todo-status.enum';
import { Todo } from '../../todo.entity';

export class GetTodosResult {
  readonly id: string;
  readonly description: string;
  readonly status: TodoStatus;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.description = todo.description;
    this.status = todo.status;
  }
}
