import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
products :any[]=[
   {name:" Dough",
   code:"56464",
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tincidunt sapien.Suspendisse in tincidunt sapien. ",},
   {name:"Cheese",
   code:"45647",
   description:"Lorem Ipsum  Sed varius leo dapibus congue condimentum. Suspendisse in tincidunt sapien. Mauris ut turpis velit.",},
   {name:"Sausage",
   code:"78797",
   description:"Proin blandit lacinia nibh, ut feugiat nisl tincidunt id. Etiam ut felis non quam mattis bibendum eget et nisi.",}
];
  constructor() { }

  ngOnInit() {
  }

}
