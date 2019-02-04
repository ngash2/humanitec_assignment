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

  /**
   * Get a list of Activitis that belong to a Programs
   * @param {String} programId - The Id tha belongs to a Program
   */
  getActivities(programId: string) {
    const httpParams = new HttpParams().set('workflowlevel1__id', programId);

    return this.appService.get(this.activityUrl, httpParams).pipe(
      catchError(e => throwError(e)),
      map((results: Activities) => results)
    );
  }

  /**
   * Add an Activity to a Program
   * @param {Activity} activity The activity you want to Add
   */
  addActivity(activity: Activity) {
    return this.appService.post(this.activityUrl, activity).pipe(
      catchError(e => throwError(e)),
      map((results: Activity) => results)
    );
  }

  /**
   * Update an Existing Activity
   * @param {Activity} activity The activity you want to Update
   */
  updateActivity(activity: Activity) {
    return this.appService
      .put(`${this.activityUrl}${activity.id}/`, activity)
      .pipe(
        catchError(e => throwError(e)),
        map((results: Activity) => results)
      );
  }

  /**
   * Delete an Existing Activity
   * @param {string} activityId The Id of the Activity you want to Delete
   */
  deleteActivity(activityId: String) {
    return this.appService.delete(`${this.activityUrl}${activityId}/`).pipe(
      catchError(e => throwError(e)),
      map((results: Activity) => results)
    );
  }
}
