import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import { ProgramService } from '../program-service/program-service.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  showProgramsList: Boolean = true;
  program: Program;

  constructor(private programService: ProgramService) {
    this.programService.onShowProgramDetails$.subscribe(data => {
      this.showProgramsList = false;
      this.program = data;
    });
    this.programService.onClose$.subscribe(data => {
      this.showProgramsList = true;
      this.program = null;
    });
  }

  ngOnInit() {}
}
