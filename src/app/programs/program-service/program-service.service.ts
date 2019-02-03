import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '@app/app.service';
import { HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Programs, Program } from '../program';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programUrl = 'workflowlevel1/';

  public onLoading$: EventEmitter<Boolean>;
  public onShowSnackBar$: EventEmitter<String>;

  constructor(private service: AppService) {
    this.onLoading$ = new EventEmitter<Boolean>();
    this.onShowSnackBar$ = new EventEmitter<String>();
  }

  /**
   * Get a List of Programs
   * @returns {Programs} Programs
   */

  public getPrograms() {
    return this.service.get(this.programUrl, new HttpParams()).pipe(
      catchError(e => throwError(e)),
      map((results: Programs) => results)
    );
  }
}
