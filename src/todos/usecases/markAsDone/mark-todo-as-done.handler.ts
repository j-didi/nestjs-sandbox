import { Injectable, NotFoundException } from '@nestjs/common';
import { TodosRepository } from '../../todos.repository';
import { UUID } from 'crypto';

@Injectable()
export class MarkTodoAsDoneHandler {
  constructor(private readonly repository: TodosRepository) {}

  handle(id: UUID): void {
    const todo = this.repository.getById(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    todo.markAsDone();
    return this.repository.update(todo);
  }
}
