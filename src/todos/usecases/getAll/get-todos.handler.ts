import { Injectable } from '@nestjs/common';
import { GetTodosResult } from './get-todos.result';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../todo.entity';

@Injectable()
export class GetTodosHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(): Promise<GetTodosResult[]> {
    const todos = await this.repository.find();
    return todos.map(
      (todo) => new GetTodosResult(todo.id, todo.description, todo.status),
    );
  }
}
