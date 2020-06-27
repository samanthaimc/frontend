import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { TypeComponent } from './type/type.component';
import { FamilyComponent } from './family/family.component';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [EmployeeComponent, DepartmentComponent, TypeComponent, FamilyComponent, MainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
