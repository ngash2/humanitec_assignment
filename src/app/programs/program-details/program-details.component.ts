import { Component, OnInit, Input } from '@angular/core';
import { ProgramService } from '../program-service/program-service.service';
import { Program } from '../program';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  @Input() program: Program;

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    console.log(this.program);
  }

  closeDetails() {
    this.program = null;
    this.programService.onClose$.emit();
  }
}
