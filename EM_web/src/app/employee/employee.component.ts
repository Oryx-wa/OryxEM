import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
// import {EmployeeCreateComponent} from './employee-create.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
   title: string = 'Employee';
 displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  showVert: boolean = true;
  showSearch: boolean = true;
  showCardorGrid: boolean = true;
  showCard: boolean = true;
  showAdd: boolean = true;
  constructor() { }

  ngOnInit() {
    this.displayMode = DisplayModeEnum.Grid;
}
}
