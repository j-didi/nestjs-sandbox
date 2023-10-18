import { Injectable } from '@nestjs/common';
import { TodosRepository } from '../../todos.repository';
import { CreateTodoCommand } from './create-todo.command';
import { CreateTodoResult } from './create-todo.result';
import { Todo } from '../../todo.entity';

@Injectable()
export class CreateTodoHandler {
  constructor(private readonly repository: TodosRepository) {}

  handle(command: CreateTodoCommand): CreateTodoResult {
    const todo = new Todo(command.description);
    this.repository.create(todo);
    return new CreateTodoResult(todo.id);
  }
}
