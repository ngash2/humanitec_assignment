import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { ActivitiesService } from './activities-service/activities-service.service';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';

@NgModule({
  declarations: [ActivitiesListComponent, ActivitiesFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [ActivitiesListComponent],
  providers: [ActivitiesService]
})
export class ActivitiesModule {}
