import { Injectable } from '@angular/core';
import { AppService } from '@app/app.service';
import { HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Programs } from '../program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  programUrl = 'workflowlevel1';

  constructor(private service: AppService) {}

  /**
   * Get a List of Programs
   * @returns {Programs} Programs
   */

  public getPrograms() {
    return this.service.get(this.programUrl, new HttpParams()).pipe(
      catchError(error),
      map((result: Programs) => {
        return result.map(({ url, id, name, status }) => {
          return { url, id, name, status };
        });
      })
    );
  }
}
