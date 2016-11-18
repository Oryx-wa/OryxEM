import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ApplicationRef } from '@angular/core';
import { routing,
         appRoutingProviders } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';
import { ExpenseComponent } from './expense/expense.component';
import { OryxToolbarComponent } from './shared/oryx-toolbar/oryx-toolbar.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { GoodsRecieptComponent } from './goods-reciept/goods-reciept.component';
import { ProductCreateComponent } from './product/product-create.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductCardComponent } from './product/product-card.component';
import { PurchaseOrderCreateComponent } from './purchase-order/purchase-order-create.component';
import { PurchaseOrderListComponent } from './purchase-order/purchase-order-list.component';
import { PurchaseOrderCardComponent } from './purchase-order/purchase-order-card.component';
import { GoodsRecieptCreateComponent } from './goods-reciept/goods-reciept-create.component';
import { GoodsRecieptCardComponent } from './goods-reciept/goods-reciept-card.component';
import { GoodsRecieptListComponent } from './goods-reciept/goods-reciept-list.component';
import { AppMainbarComponent } from './shared/app-mainbar/app-mainbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenseComponent,
    EmployeeComponent,
    OryxToolbarComponent,
    WorkflowComponent,
    ProductComponent,
    PurchaseOrderComponent,
    GoodsRecieptComponent,
    EmployeeCreateComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductCardComponent,
    PurchaseOrderCreateComponent,
    PurchaseOrderListComponent,
    PurchaseOrderCardComponent,
    GoodsRecieptCreateComponent,
    GoodsRecieptCardComponent,
    GoodsRecieptListComponent,
    AppMainbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
 providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
