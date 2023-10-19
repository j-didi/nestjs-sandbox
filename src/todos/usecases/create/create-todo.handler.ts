import { Injectable } from '@nestjs/common';
import { CreateTodoCommand } from './create-todo.command';
import { CreateTodoResult } from './create-todo.result';
import { Todo } from '../../todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreateTodoHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(command: CreateTodoCommand): Promise<CreateTodoResult> {
    const todo = new Todo(command.description);
    await this.repository.save(todo);
    return new CreateTodoResult(todo.id);
  }
}
