import {
  LoadActivities,
  ActivityActionTypes,
  LoadActivitiesSuccess
} from './activity.actions';
import { Activity, Activities } from '../activity';
import { Program } from '@app/programs/program';

describe('Activity Actions', () => {
  let activity: Activity;
  let activities: Activities;
  const program: Program = { id: 564, name: '1234567890' };

  beforeEach(() => {
    activity = {
      id: 12,
      name: 'Some Name A'
    } as Activity;

    activities = [activity];
  });

  describe('LoadActivities', () => {
    it('should create an action', () => {
      const action = new LoadActivities('' + program.id);

      expect({ ...action }).toEqual({
        type: ActivityActionTypes.LoadActivities
      });
    });
  });

  describe('LoadActivitiesSuccess', () => {
    it('should create an action', () => {
      const action = new LoadActivitiesSuccess(activities);

      expect({ ...action }).toEqual({
        type: ActivityActionTypes.LoadActivitiesSuccess,
        payload: activities
      });
    });
  });
});
