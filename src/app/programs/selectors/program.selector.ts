import { createSelector } from '@ngrx/store';

import * as fromReducers from '@app/core/store/reducers';
import * as fromProgram from '../reducers/program.reducer';

export const selectAllPrograms = createSelector(
  fromReducers.getProgramState,
  fromProgram.selectAll
);
