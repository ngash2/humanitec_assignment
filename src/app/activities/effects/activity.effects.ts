import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivitiesService } from '../activities-service/activities-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import {
  ActivityActionTypes,
  LoadActivities,
  LoadActivitiesSuccess,
  AddActivity,
  AddActivitySuccess
} from '../actions/activity.actions';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Activities, Activity } from '../activity';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ActivityEffects {
  constructor(private actions$: Actions, private service: ActivitiesService) {}

  @Effect()
  loadActivities$: Observable<Action> = this.actions$.pipe(
    ofType(ActivityActionTypes.LoadActivities),
    switchMap((action: LoadActivities) =>
      this.service.getActivities(action.payload).pipe(
        map((activities: Activities) => new LoadActivitiesSuccess(activities)),
        catchError(error => of(error))
      )
    )
  );

  @Effect()
  addActivity$: Observable<Action> = this.actions$.pipe(
    ofType(ActivityActionTypes.AddActivity),
    switchMap((action: AddActivity) =>
      this.service.addActivity(action.payload).pipe(
        map((activity: Activity) => new AddActivitySuccess(activity)),
        catchError(error => of(error))
      )
    )
  );
}
