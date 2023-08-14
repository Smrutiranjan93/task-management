import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:AdminMenuComponent,
        children:[
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: AdminDashboardComponent },
         
          
        ],
      }
    ])
  ]
})
export class AdminModule { }
