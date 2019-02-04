import { Activity, Activities } from '../activity';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  ActivityActions,
  ActivityActionTypes
} from '../actions/activity.actions';

export interface ActivityState extends EntityState<Activity> {
  activities: Activities;
}

export const activityAdapter: EntityAdapter<Activity> = createEntityAdapter<
  Activity
>();

export const initialState: ActivityState = activityAdapter.getInitialState({
  activities: null
});

export function reducer(
  state = initialState,
  action: ActivityActions
): ActivityState {
  switch (action.type) {
    case ActivityActionTypes.LoadActivities: {
      return { ...state };
    }
    case ActivityActionTypes.LoadActivitiesSuccess: {
      return activityAdapter.addAll(action.payload, state);
    }
    case ActivityActionTypes.AddActivity: {
      return { ...state };
    }
    case ActivityActionTypes.AddActivitySuccess: {
      return activityAdapter.addOne(action.payload, state);
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
} = activityAdapter.getSelectors();
