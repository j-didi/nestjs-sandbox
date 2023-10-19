import { Body, Get } from '@nestjs/common';
import { GetTodosHandler } from './usecases/getAll/get-todos.handler';
import { GetTodoByIdHandler } from './usecases/getById/get-todo-by-id.handler';
import { CreateTodoHandler } from './usecases/create/create-todo.handler';
import { PutTodoInProgressHandler } from './usecases/putInProgress/put-todo-in-progress.handler';
import { MarkTodoAsDoneHandler } from './usecases/markAsDone/mark-todo-as-done.handler';
import { DeleteTodoHandler } from './usecases/delete/delete-todo.handler';
import { GetTodosResult } from './usecases/getAll/get-todos.result';
import { UUID } from 'crypto';
import { GetTodoByIdResult } from './usecases/getById/get-todo-by-id.result';
import { CreateTodoCommand } from './usecases/create/create-todo.command';
import { CreateTodoResult } from './usecases/create/create-todo.result';
import { UuidParam } from '../commons/uuid-param';
import {
  ApiController,
  CustomDelete,
  CustomGetById,
  CustomPost,
  CustomPut,
} from '../commons/custom-decorators';

@ApiController('Todos')
export class TodosController {
  constructor(
    private readonly getTodosHandler: GetTodosHandler,
    private readonly getTodoByIdHandler: GetTodoByIdHandler,
    private readonly createTodoHandler: CreateTodoHandler,
    private readonly putTodoInProgressHandler: PutTodoInProgressHandler,
    private readonly markTodoAsDoneHandler: MarkTodoAsDoneHandler,
    private readonly deleteTodoHandler: DeleteTodoHandler,
  ) {}

  @Get()
  get(): GetTodosResult[] {
    return this.getTodosHandler.handle();
  }

  @CustomGetById(':id')
  getById(@UuidParam('id') id: UUID): GetTodoByIdResult {
    return this.getTodoByIdHandler.handle(id);
  }

  @CustomPost()
  save(@Body() command: CreateTodoCommand): CreateTodoResult {
    return this.createTodoHandler.handle(command);
  }

  @CustomPut(':id/put-in-progress')
  putInProgress(@UuidParam('id') id: UUID): void {
    return this.putTodoInProgressHandler.handle(id);
  }

  @CustomPut(':id/mark-as-done')
  markAsDone(@UuidParam('id') id: UUID): void {
    return this.markTodoAsDoneHandler.handle(id);
  }

  @CustomDelete(':id')
  delete(@UuidParam('id') id: UUID): void {
    return this.deleteTodoHandler.handle(id);
  }
}
