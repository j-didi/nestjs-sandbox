import { Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../todo.entity';

@Injectable()
export class DeleteTodoHandler {
  constructor(
    @InjectRepository(Todo) private readonly repository: Repository<Todo>,
  ) {}

  async handle(id: UUID): Promise<void> {
    const todo = this.repository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found!`);
    }
    await this.repository.delete(id);
  }
}
