import { Injectable, NotFoundException } from '@nestjs/common';
import { TodosRepository } from '../../todos.repository';
import { UUID } from 'crypto';
import { GetTodoByIdResult } from './get-todo-by-id.result';

@Injectable()
export class GetTodoByIdHandler {
  constructor(private readonly repository: TodosRepository) {}

  handle(id: UUID): GetTodoByIdResult {
    const todo = this.repository.getById(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    return new GetTodoByIdResult(todo);
  }
}
