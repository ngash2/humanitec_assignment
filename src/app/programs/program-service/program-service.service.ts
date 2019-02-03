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

  public onShowProgramDetails$: EventEmitter<Program>;
  public onClose$: EventEmitter<any>;

  constructor(private service: AppService) {
    this.onShowProgramDetails$ = new EventEmitter<Program>();
    this.onClose$ = new EventEmitter<any>();
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
