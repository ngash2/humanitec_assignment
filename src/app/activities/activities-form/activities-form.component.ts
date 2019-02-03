import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivitiesService } from '../activities-service/activities-service.service';
import { Activity } from '../activity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrls: ['./activities-form.component.scss']
})
export class ActivitiesFormComponent implements OnInit {
  activityForm: FormGroup;
  showProgress: Boolean = false;
  isUpdate: Boolean = false;
  title: String = 'Add Program Activity';

  constructor(
    public dialogRef: MatDialogRef<ActivitiesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Activity,
    private activityService: ActivitiesService
  ) {
    this.initActivityForm();
    if (!isNullOrUndefined(data)) {
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
    this.activityForm.get('name').setValue(this.data.name);
    this.activityForm
      .get('expected_start_date')
      .setValue(this.data.expected_start_date);
    this.activityForm
      .get('expected_end_date')
      .setValue(this.data.expected_end_date);
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
    this.isUpdate ? this.updateActivity(model) : this.addActivity(model);
  }

  addActivity(model: Activity) {
    this.activityService.addActivity(model).subscribe(data => {
      this.showProgress = false;
      this.closeDialog();
    });
  }

  updateActivity(model: Activity) {
    this.activityService.updateActivity(model).subscribe(data => {
      this.showProgress = false;
      this.closeDialog();
    });
  }
}
