/* tslint:disable */
export interface TodoDTO {
  contexts?: Array<string>;
  hasPriority?: boolean;
  id?: string;
  isCompleted?: boolean;
  isDueToday?: boolean;
  isDueTomorrow?: boolean;
  isOverdue?: boolean;
  isProject?: boolean;
  isThresholdPast?: boolean;
  isThresholdToday?: boolean;
  isWaitingFor?: boolean;
  projects?: Array<string>;
  raw?: string;
}
