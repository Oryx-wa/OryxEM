import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 

import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

import { Router, ActivatedRoute } from '@angular/router';

import {DisplayModeEnum} from '../shared-enum.enum';

export type SearchOutput = string;

@Component({
  
  selector: 'app-oryx-toolbar',
  templateUrl: 'oryx-toolbar.component.html',
  //styleUrls: require('style.css')
  
})
export class OryxToolbarComponent implements OnInit {


  @Input() title: string;
  @Input() showSearch: boolean = false;
  @Input() showVert: boolean = false;
  @Input() showCardorGrid: boolean = false;
  @Input() showCard: boolean = false;
  @Input() displayMode: DisplayModeEnum;
  @Input() showSeach: boolean = true;
  @Input() showAdd: boolean = true;

  //@Input() displayModeEnum = DisplayModeEnum;
  //Outputs
  keyup$ = new Subject<KeyboardEvent>();

  
  @Output() keySearch: Observable<SearchOutput> = this.keyup$
    .debounceTime(300)
    .map(event => (event.target as HTMLInputElement).value)
    .distinctUntilChanged();

  @Output() GridOrCard: EventEmitter<any> = new EventEmitter();
  @Output() Card: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  search: boolean = false;
  submitted:boolean = false;
  searchString: string= "";
  //displayModeEnum = DisplayModeEnum;

  constructor() { }

  ngOnInit() { }

  changeDisplayMode(mode: number) {
    console.log(mode.toString());
    this.GridOrCard.next(mode);
    this.Card.next(mode);
  }
  

  displaySearch() {
    this.search = true;
  }

  onSubmit() {
    this.submitted = true;
    this.search = true;
  }
  onSearchSubmit() {
    this.submitted = true;
    this.search = false;
    //console.log(this.searchString);
    //this.onSearch.next(this.searchString);
  }

  onCloseSearch() {
  this.submitted = false;
    this.search = false;
  }
  

}


