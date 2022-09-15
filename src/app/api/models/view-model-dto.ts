/* tslint:disable */
import { TodoDTO } from './todo-dto';
export interface ViewModelDTO {
  completedCount?: number;
  todos?: Array<TodoDTO>;
}
