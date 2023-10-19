import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PutTodoInProgressHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(id: UUID): Promise<void> {
    const todo = await this.repository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    todo.putInProgress();
    await this.repository.save(todo);
  }
}
