import { Component, OnInit, Input, Inject } from '@angular/core';
import { ProgramService } from '../program-service/program-service.service';
import { Program } from '../program';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivitiesFormComponent } from '@app/activities/activities-form/activities-form.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  program: Program;
  loading: Boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ActivitiesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program,
    private programService: ProgramService
  ) {
    if (isNullOrUndefined(data)) {
      this.closeDialog();
    }
    this.program = data;

    programService.onLoading$.subscribe(
      (data: Boolean) => (this.loading = data)
    );
  }
  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
