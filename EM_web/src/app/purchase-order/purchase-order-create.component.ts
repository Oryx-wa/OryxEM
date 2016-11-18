import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.scss']
})
export class PurchaseOrderCreateComponent implements OnInit {
status: any[] = [{ name: '' },{name: 'Open' },{name: 'Closed' }];
  constructor() { }

  ngOnInit() {
  }

}
