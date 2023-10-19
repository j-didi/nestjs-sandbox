import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { CreateTodoHandler } from './usecases/create/create-todo.handler';
import { DeleteTodoHandler } from './usecases/delete/delete-todo.handler';
import { GetTodosHandler } from './usecases/getAll/get-todos.handler';
import { MarkTodoAsDoneHandler } from './usecases/markAsDone/mark-todo-as-done.handler';
import { PutTodoInProgressHandler } from './usecases/putInProgress/put-todo-in-progress.handler';
import { GetTodoByIdHandler } from './usecases/getById/get-todo-by-id.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [
    CreateTodoHandler,
    DeleteTodoHandler,
    GetTodosHandler,
    GetTodoByIdHandler,
    MarkTodoAsDoneHandler,
    PutTodoInProgressHandler,
  ],
})
export class TodosModule {}
