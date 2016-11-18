import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
title: string = 'Products';
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
changeDisplayMode(mode:DisplayModeEnum){
  this.displayMode=mode;
}
}
