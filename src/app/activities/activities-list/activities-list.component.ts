import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivitiesService } from '../activities-service/activities-service.service';
import { Program } from '@app/programs/program';
import { Activities, Activity } from '../activity';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProgramService } from '@app/programs/program-service/program-service.service';
import { ActivitiesFormComponent } from '../activities-form/activities-form.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {
  @Input() program: Program;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'expectedStartDate',
    'expectedEndDate',
    'progress',
    'status',
    'actions'
  ];
  activities: Activities = [];
  dataSource = new MatTableDataSource<Program>([]);
  loading: Boolean = true;
  pageSize = 10;
  pageIndex = 0;
  activitiesTotal = 0;

  constructor(
    private activityService: ActivitiesService,
    public dialog: MatDialog,
    private programService: ProgramService
  ) {}

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.emitLoading();
    this.activityService.getActivities('' + this.program.id).subscribe(data => {
      this.activities = data;
      this.activitiesTotal = data.length;
      this.dataSource = new MatTableDataSource<Program>(
        [...this.activities].slice(this.pageIndex, this.pageSize)
      );
      this.loading = false;
      this.emitLoading();
    });
  }

  getPaginatorData(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    this.dataSource = new MatTableDataSource(
      [...this.activities].slice(start, end)
    );
  }

  emitLoading() {
    this.programService.onLoading$.emit(this.loading);
  }

  showEditActivity(activity: Activity) {
    this.dialog.open(ActivitiesFormComponent, {
      width: '50%',
      data: { program: this.program, activity: activity }
    });
    this.programService.onCloseDetailDialog$.emit();
  }

  showDeleteActivity(activityId: String) {}
}
