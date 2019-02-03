import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@env/environment';
import * as fromProgramReducer from '@app/programs/reducers/program.reducer';
import * as fromActivityReducer from '@app/activities/reducers/activity.reducer';

export interface State {
  programs: fromProgramReducer.ProgramsState;
  activities: fromActivityReducer.ActivityState;
}

export const reducers: ActionReducerMap<State> = {
  programs: fromProgramReducer.reducer,
  activities: fromActivityReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getAppState = createFeatureSelector<State>('root');
export const getProgramState = (state: State) => state.programs;
export const getActivityState = (state: State) => state.activities;
