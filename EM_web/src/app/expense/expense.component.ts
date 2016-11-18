import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  constructor() { }
title: string = 'Expense';
 displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  showVert: boolean = true;
  showSearch: boolean = true;
  showCardorGrid: boolean = true;
  showCard: boolean = true;
  showAdd: boolean = true;
  ngOnInit() {
    this.displayMode = DisplayModeEnum.Grid;
  }

}
