import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { isNullOrUndefined } from 'util';
import * as moment from 'moment';

import { ActivitiesService } from '../activities-service/activities-service.service';
import { Activity } from '../activity';
import { Program } from '@app/programs/program';
import { ProgramService } from '@app/programs/program-service/program-service.service';

export interface ActivityDialogData {
  activity?: Activity;
  program: Program;
}

export const MY_FORMATS = {
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM Y'
  }
};

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrls: ['./activities-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ActivitiesFormComponent implements OnInit {
  activityForm: FormGroup;
  showProgress: Boolean = false;
  isUpdate: Boolean = false;
  title: String = 'Add Program Activity';

  constructor(
    public dialogRef: MatDialogRef<ActivitiesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActivityDialogData,
    private activityService: ActivitiesService,
    private programService: ProgramService
  ) {
    this.initActivityForm();
    if (!isNullOrUndefined(data.activity)) {
      this.setFormData();
      this.title = 'Update Program Activity';
    }
  }

  ngOnInit() {}

  initActivityForm() {
    this.activityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      expected_start_date: new FormControl('', []),
      expected_end_date: new FormControl('', [])
    });
  }

  setFormData() {
    this.activityForm.get('name').setValue(this.data.activity.name);
    this.activityForm
      .get('expected_start_date')
      .setValue(this.data.activity.expected_start_date);
    this.activityForm
      .get('expected_end_date')
      .setValue(this.data.activity.expected_end_date);
    this.isUpdate = true;
  }

  clearActivityForm() {
    this.activityForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit(model: Activity, isValid: boolean) {
    this.showProgress = true;
    model.expected_start_date = moment(
      model.expected_start_date,
      'YYYY-MM-DD[T]HH:mm:ss'
    );
    model.expected_end_date = moment(
      model.expected_end_date,
      'YYYY-MM-DD[T]HH:mm:ss'
    );
    this.isUpdate ? this.updateActivity(model) : this.addActivity(model);
  }

  addActivity(model: Activity) {
    model.workflowlevel1 = `https://dev.toladata.io/api/workflowlevel1/${
      this.data.program.id
    }/`;
    this.activityService.addActivity(model).subscribe(data => {
      this.showProgress = false;
      this.programService.onShowSnackBar$.emit('Actvity Successfully Created');
      this.closeDialog();
    });
  }

  updateActivity(model: Activity) {
    model.id = this.data.activity.id;
    model.workflowlevel1 = this.data.activity.workflowlevel1;
    this.activityService.updateActivity(model).subscribe(data => {
      this.showProgress = false;
      this.programService.onShowSnackBar$.emit('Actvity Successfully Updated');
      this.closeDialog();
    });
  }
}
