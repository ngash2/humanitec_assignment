import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { ActivitiesService } from './activities-service/activities-service.service';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivitiesDeleteComponent } from './activities-delete/activities-delete.component';

@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivitiesFormComponent,
    ActivitiesDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  entryComponents: [
    ActivitiesFormComponent,
    ActivitiesListComponent,
    ActivitiesDeleteComponent
  ],
  exports: [ActivitiesListComponent],
  providers: [ActivitiesService]
})
export class ActivitiesModule {}
