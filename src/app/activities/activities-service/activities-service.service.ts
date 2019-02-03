import { Injectable } from '@angular/core';
import { AppService } from '@app/app.service';
import { HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators/map';
import { Activities, Activity } from '../activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  activityUrl = 'workflowlevel2/';

  constructor(private appService: AppService) {}

  getActivities(programId: string) {
    const httpParams = new HttpParams().set('workflowlevel1__id', programId);

    return this.appService.get(this.activityUrl, httpParams).pipe(
      catchError(e => throwError(e)),
      map((results: Activities) => results)
    );
  }

  addActivity(activity: Activity) {
    return this.appService.post(this.activityUrl, activity).pipe(
      catchError(e => throwError(e)),
      map((results: Activity) => results)
    );
  }

  updateActivity(activity: Activity) {
    return this.appService
      .put(`${this.activityUrl}${activity.id}/`, activity)
      .pipe(
        catchError(e => throwError(e)),
        map((results: Activity) => results)
      );
  }

  deleteActivity(activityId: String) {
    return this.appService.delete(`${this.activityUrl}${activityId}/`).pipe(
      catchError(e => throwError(e)),
      map((results: Activity) => results)
    );
  }
}
