import { Component } from '@angular/core';
import { DisplayModeEnum } from '../app/shared/shared-enum.enum';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Enterprise Management';
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

