import { randomUUID, UUID } from 'crypto';
import { TodoStatus } from './todo-status.enum';
import { BadRequestException } from '@nestjs/common';

export class Todo {
  readonly id: UUID;
  readonly description: string;

  constructor(name: string) {
    this.id = randomUUID();
    this.description = name;
    this._status = TodoStatus.Created;
  }

  private _status: TodoStatus;

  get status(): TodoStatus {
    return this._status;
  }

  putInProgress() {
    if (this._status == TodoStatus.InProgress) {
      throw new BadRequestException(`Todo already in progress!`);
    }

    if (this._status == TodoStatus.Done) {
      throw new BadRequestException(`Todo already done!`);
    }

    this._status = TodoStatus.InProgress;
  }

  markAsDone() {
    if (this._status == TodoStatus.Done) {
      throw new BadRequestException(`Todo already done!`);
    }

    if (this._status == TodoStatus.Created) {
      throw new BadRequestException(
        `Todo must be in progress before be marked as done!`,
      );
    }

    this._status = TodoStatus.Done;
  }
}
