import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

import { ProgramsComponent } from './programs/programs.component';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramService } from './program-service/program-service.service';
import { ActivitiesModule } from '@app/activities/activities.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    ActivitiesModule
  ],
  entryComponents: [ProgramDetailsComponent],
  providers: [ProgramService],
  declarations: [
    ProgramsComponent,
    ProgramsListComponent,
    ProgramDetailsComponent
  ]
})
export class ProgramsModule {}
