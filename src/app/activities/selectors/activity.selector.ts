import { createSelector } from '@ngrx/store';

import * as fromReducers from '@app/core/store/reducers';
import * as fromActivity from '../reducers/activity.reducer';

export const selectAllActivities = createSelector(
  fromReducers.getActivityState,
  fromActivity.selectAll
);
