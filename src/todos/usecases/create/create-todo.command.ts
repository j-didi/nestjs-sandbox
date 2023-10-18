import { IsString, Length } from 'class-validator';

export class CreateTodoCommand {
  @IsString()
  @Length(3, 250)
  readonly description: string;
}
