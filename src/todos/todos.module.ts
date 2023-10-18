import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { CreateTodoHandler } from './usecases/create/create-todo.handler';
import { DeleteTodoHandler } from './usecases/delete/delete-todo.handler';
import { GetTodosHandler } from './usecases/getAll/get-todos.handler';
import { MarkTodoAsDoneHandler } from './usecases/markAsDone/mark-todo-as-done.handler';
import { PutTodoInProgressHandler } from './usecases/putInProgress/put-todo-in-progress.handler';
import { TodosRepository } from './todos.repository';
import { GetTodoByIdHandler } from './usecases/getById/get-todo-by-id.handler';

@Module({
  controllers: [TodosController],
  providers: [
    CreateTodoHandler,
    DeleteTodoHandler,
    GetTodosHandler,
    GetTodoByIdHandler,
    MarkTodoAsDoneHandler,
    PutTodoInProgressHandler,
    TodosRepository,
  ],
})
export class TodosModule {}
