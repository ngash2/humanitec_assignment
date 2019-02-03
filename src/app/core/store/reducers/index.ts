import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@env/environment';
import * as fromProgramReducer from '@app/programs/reducers/program.reducer';

export interface State {
  programs: fromProgramReducer.ProgramsState;
}

export const reducers: ActionReducerMap<State> = {
  programs: fromProgramReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getAppState = createFeatureSelector<State>('root');
export const getProgramState = (state: State) => state.programs;
