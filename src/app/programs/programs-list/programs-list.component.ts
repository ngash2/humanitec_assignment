import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program-service/program-service.service';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {
  constructor(private programsService: ProgramService) {}

  ngOnInit() {}

  getData() {}
}
