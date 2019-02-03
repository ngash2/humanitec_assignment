import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import { ProgramService } from '../program-service/program-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  showProgramsList: Boolean = true;
  program: Program;

  constructor(
    private programService: ProgramService,
    private snackBar: MatSnackBar
  ) {
    this.programService.onShowSnackBar$.subscribe(data => {
      this.snackBar.open(data, 'close', {
        duration: 2000
      });
    });
  }

  ngOnInit() {}
}
