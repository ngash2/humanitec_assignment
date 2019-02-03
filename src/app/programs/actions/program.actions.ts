import { Action } from '@ngrx/store';
import { Programs } from '../program';

export enum ProgramActionTypes {
  LoadPrograms = '[Programs] Load All Programs',
  LoadProgramsFail = '[Programs] Programs Fail',
  LoadProgramsSuccess = '[Programs] Load All Programs Success'
}

export class LoadPrograms implements Action {
  readonly type = ProgramActionTypes.LoadPrograms;
}

export class LoadProgramsFail implements Action {
  readonly type = ProgramActionTypes.LoadProgramsFail;
  constructor(public payload: { error: any }) {}
}

export class LoadProgramsSuccess implements Action {
  readonly type = ProgramActionTypes.LoadProgramsSuccess;
  constructor(public payload: Programs) {}
}

export type ProgramActions =
  | LoadPrograms
  | LoadProgramsFail
  | LoadProgramsSuccess;
