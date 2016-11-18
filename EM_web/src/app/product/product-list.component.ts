import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products :any[]=[
   {name:" Dough",
   code:"56464",
   description:"Lorem Ipsum",},
   {name:"Cheese",
   code:"45647",
   description:"Lorem Ipsum",},
   {name:"Sausage",
   code:"78797",
   description:"Lorem Ipsum",}
];
  constructor() { }

  ngOnInit() {
  }

}
