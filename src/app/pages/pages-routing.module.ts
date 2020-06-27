import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {EmployeeComponent} from "./employee/employee.component";
import {DepartmentComponent} from "./department/department.component";
import {FamilyComponent} from "./family/family.component";
import {TypeComponent} from "./type/type.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'family',
        component: FamilyComponent
      },
      {
        path: 'type',
        component: TypeComponent
      },
      {
        path: 'main',
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
