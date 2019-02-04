import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Program, Programs } from '../program';
import { ProgramDetailsComponent } from '../program-details/program-details.component';
import { ActivitiesFormComponent } from '@app/activities/activities-form/activities-form.component';
import * as fromStore from '@app/core/store/reducers/index';
import * as programActions from '../actions/program.actions';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { selectAllPrograms } from '../selectors/program.selector';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'start_date',
    'end_date',
    'status',
    'actions'
  ];
  programs: Programs = [];
  dataSource = new MatTableDataSource<Program>();
  loading: Boolean;
  pageSize = 10;
  pageIndex = 0;
  programsTotal = 0;

  subscription: Subscription;

  constructor(public dialog: MatDialog, private store: Store<fromStore.State>) {
    this.store.dispatch(new programActions.LoadPrograms());
  }

  ngOnInit() {
    this.getProgramsData();
  }

  getProgramsData() {
    this.loading = true;
    this.subscription = this.store
      .pipe(select(selectAllPrograms))
      .subscribe(data => {
        if (data.length > 0) {
          this.programs = data;
          this.programsTotal = data.length;
          this.dataSource = new MatTableDataSource<Program>(
            [...this.programs].slice(this.pageIndex, this.pageSize)
          );
          this.loading = false;
        }
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
      [...this.programs].slice(start, end)
    );
  }

  showDetails(program: Program) {
    this.dialog.open(ProgramDetailsComponent, {
      width: '50%',
      data: program
    });
  }

  showAddActivity(program: Program) {
    this.dialog.open(ActivitiesFormComponent, {
      width: '50%',
      data: { program: program }
    });
  }
}
