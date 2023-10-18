import { UUID } from 'crypto';

export class CreateTodoResult {
  readonly id: string;

  constructor(id: UUID) {
    this.id = id;
  }
}
