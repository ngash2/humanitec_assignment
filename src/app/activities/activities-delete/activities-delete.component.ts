import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';

import { ActivitiesFormComponent } from '../activities-form/activities-form.component';
import { ActivitiesService } from '../activities-service/activities-service.service';
import { ProgramService } from '@app/programs/program-service/program-service.service';

@Component({
  selector: 'app-activities-delete',
  templateUrl: './activities-delete.component.html',
  styleUrls: ['./activities-delete.component.scss']
})
export class ActivitiesDeleteComponent implements OnInit {
  deleting: Boolean = false;
  name: String;
  id: String;

  constructor(
    public dialogRef: MatDialogRef<ActivitiesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private activityService: ActivitiesService,
    private programService: ProgramService
  ) {
    if (isNullOrUndefined(data)) {
      this.closeDialog();
    }
    this.name = data.name;
    this.id = data.id;
  }

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }

  deleteActivity() {
    this.deleting = true;
    this.activityService.deleteActivity(this.id).subscribe(data => {
      this.programService.onShowSnackBar$.emit(`Activity '${name}' Deleted`);
      this.closeDialog();
    });
  }
}
