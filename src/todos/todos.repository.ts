import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { UUID } from 'crypto';

@Injectable()
export class TodosRepository {
  private static todos: Todo[] = [];

  get(): Todo[] {
    return TodosRepository.todos;
  }

  getById(id: UUID): Todo {
    return TodosRepository.todos.find((todo) => todo.id === id);
  }

  create(todo: Todo): void {
    TodosRepository.todos.push(todo);
  }

  update(todo: Todo): void {
    let entity = this.getById(todo.id);
    entity = todo;
  }

  delete(id: UUID): void {
    const index = TodosRepository.todos.findIndex((todo) => todo.id === id);
    TodosRepository.todos.splice(index, 1);
  }
}
