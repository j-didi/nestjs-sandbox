import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { GetTodoByIdResult } from './get-todo-by-id.result';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../todo.entity';

@Injectable()
export class GetTodoByIdHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(id: UUID): Promise<GetTodoByIdResult> {
    const todo = await this.repository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    return new GetTodoByIdResult(todo.id, todo.description, todo.status);
  }
}
