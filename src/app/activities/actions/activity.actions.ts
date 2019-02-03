import { Action } from '@ngrx/store';
import { Activities } from '../activity';

export enum ActivityActionTypes {
  LoadActivities = '[Activities] Load All Activities',
  LoadActivitiesFail = '[Activities] Activities Fail',
  LoadActivitiesSuccess = '[Activities] Load All Activities Success'
}

export class LoadActivities implements Action {
  readonly type = ActivityActionTypes.LoadActivities;
  constructor(public payload: string) {}
}

export class LoadActivitiesFail implements Action {
  readonly type = ActivityActionTypes.LoadActivitiesFail;
  constructor(public payload: { error: any }) {}
}

export class LoadActivitiesSuccess implements Action {
  readonly type = ActivityActionTypes.LoadActivitiesSuccess;
  constructor(public payload: Activities) {}
}

export type ActivityActions =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess;
