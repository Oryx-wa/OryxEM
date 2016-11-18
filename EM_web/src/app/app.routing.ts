import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from './home';
import {EmployeeComponent} from './employee';
import {ExpenseComponent} from './expense';
import {WorkflowComponent} from './workflow';
import {ProductComponent} from './product';
import {PurchaseOrderComponent} from './purchase-order';
import {GoodsRecieptComponent} from './goods-reciept';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'expense', component: ExpenseComponent },
     { path: 'workflow', component: WorkflowComponent },
        { path: 'product', component: ProductComponent },
        { path: 'purchase', component: PurchaseOrderComponent },
         { path: 'goods', component: GoodsRecieptComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);