import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { routing,employeeRoutingProviders } from './shared/employee.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {EmployeeCreateComponent} from './employee-create.component';

@NgModule({
  declarations: [
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
 providers: [employeeRoutingProviders],
})
export class EmployeeModule { }
