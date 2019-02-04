import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Program, Programs } from '../program';
import { ProgramActionTypes, ProgramActions } from '../actions/program.actions';

export interface ProgramsState extends EntityState<Program> {
  programs: Programs;
}

export const programAdapter: EntityAdapter<Program> = createEntityAdapter<
  Program
>();

export const initialState: ProgramsState = programAdapter.getInitialState({
  programs: null
});

export function reducer(
  state = initialState,
  action: ProgramActions
): ProgramsState {
  switch (action.type) {
    case ProgramActionTypes.LoadPrograms: {
      return { ...state };
    }
    case ProgramActionTypes.LoadProgramsSuccess: {
      return programAdapter.addAll(action.payload, state);
    }
    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = programAdapter.getSelectors();
