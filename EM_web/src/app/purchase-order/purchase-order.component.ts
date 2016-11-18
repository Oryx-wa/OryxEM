import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
title: string = 'Purchase Order';
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
