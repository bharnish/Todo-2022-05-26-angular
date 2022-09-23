/* tslint:disable */
import { TodoDTO } from './todo-dto';
export interface GroupingDTO {
  data?: Array<TodoDTO>;
  isAllWaitingFor?: boolean;
  key?: string;
}
