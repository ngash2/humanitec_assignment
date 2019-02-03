import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProgramService } from '../program-service/program-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import {
  ProgramActionTypes,
  LoadProgramsSuccess
} from '../actions/program.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Programs } from '../program';
import { of } from 'rxjs';

@Injectable()
export class ProgramEffects {
  constructor(private actions$: Actions, private service: ProgramService) {}

  @Effect()
  loadPrograms$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramActionTypes.LoadPrograms),
    switchMap(() =>
      this.service.getPrograms().pipe(
        map((programs: Programs) => new LoadProgramsSuccess(programs)),
        catchError(error => of(error))
      )
    )
  );
}
