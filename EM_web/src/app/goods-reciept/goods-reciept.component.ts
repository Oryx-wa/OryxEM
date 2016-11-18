import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-goods-reciept',
  templateUrl: './goods-reciept.component.html',
  styleUrls: ['./goods-reciept.component.scss']
})
export class GoodsRecieptComponent implements OnInit {
title: string = 'Goods Reciept';
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
