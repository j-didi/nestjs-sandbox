import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../todo.entity';

@Injectable()
export class MarkTodoAsDoneHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(id: UUID): Promise<void> {
    const todo = await this.repository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    todo.markAsDone();
    await this.repository.save(todo);
  }
}
