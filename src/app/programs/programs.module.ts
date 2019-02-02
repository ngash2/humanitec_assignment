import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramService } from './program-service/program-service.service';
import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [ProgramService],
  declarations: [
    ProgramsComponent,
    ProgramsListComponent,
    ProgramDetailsComponent
  ]
})
export class ProgramsModule {}
