import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { RouterModule } from '@angular/router';
import { EmployeeMenuComponent } from './employee-menu/employee-menu.component';



@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:EmployeeMenuComponent,
        children:[
          
           { path:'',redirectTo:'dashboard',pathMatch:'full'},
           { path:'dashboard' ,component:EmployeeDashboardComponent,}
          
        ]
      }
    ])
  ]
})
export class EmployeeModule { }
