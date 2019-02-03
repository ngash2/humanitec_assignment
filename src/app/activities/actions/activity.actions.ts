import { Action } from '@ngrx/store';
import { Activities, Activity } from '../activity';

export enum ActivityActionTypes {
  LoadActivities = '[Activities] Load All Activities',
  LoadActivitiesFail = '[Activities] Activities Fail',
  LoadActivitiesSuccess = '[Activities] Load All Activities Success',

  AddActivity = '[Activity] Add Activity',
  AddActivityFail = '[Activity] Add Activity Fail',
  AddActivitySuccess = '[Activity] Add Activity Success'
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

export class AddActivity implements Action {
  readonly type = ActivityActionTypes.AddActivity;
  constructor(public payload: Activity) {}
}

export class AddActivityFail implements Action {
  readonly type = ActivityActionTypes.AddActivityFail;
  constructor(public payload: { error: any }) {}
}

export class AddActivitySuccess implements Action {
  readonly type = ActivityActionTypes.AddActivitySuccess;
  constructor(public payload: Activity) {}
}

export type ActivityActions =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess
  | AddActivity
  | AddActivityFail
  | AddActivitySuccess;
