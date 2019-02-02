import { Injectable } from '@angular/core';
import { AppService } from '@app/app.service';
import { HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Programs } from '../program';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programUrl = 'workflowlevel1/';

  constructor(private service: AppService) {}

  /**
   * Get a List of Programs
   * @returns {Programs} Programs
   */

  public getPrograms() {
    return this.service.get(this.programUrl, new HttpParams()).pipe(
      catchError(e => throwError(e)),
      map((result: Programs) => {
        return result.map(({ id, name, status, start_date, end_date }) => {
          return { id, name, status, start_date, end_date };
        });
      })
    );
  }
}
