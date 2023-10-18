import { Injectable } from '@nestjs/common';
import { TodosRepository } from '../../todos.repository';
import { GetTodosResult } from './get-todos.result';

@Injectable()
export class GetTodosHandler {
  constructor(private readonly repository: TodosRepository) {}

  handle(): GetTodosResult[] {
    const todos = this.repository.get();
    return todos.map((todo) => new GetTodosResult(todo));
  }
}
