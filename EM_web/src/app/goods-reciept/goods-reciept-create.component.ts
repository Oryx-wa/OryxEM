import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-reciept-create',
  templateUrl: './goods-reciept-create.component.html',
  styleUrls: ['./goods-reciept-create.component.scss']
})
export class GoodsRecieptCreateComponent implements OnInit {
goods :any[]=[
   { sn:"1",
     name:" ",
   code:"",
   description:"",},
   {
     sn:"2",
     name:"",
   code:"",
   description:"",},
   {sn:"3",
     name:"",
   code:"",
   description:"",}
];
  constructor() { }

  ngOnInit() {
  }

}
