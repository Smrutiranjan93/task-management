import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';
import { StatementComponent } from './statement/statement.component';
import { ViewRequestFormComponent } from './view-request-form/view-request-form.component';
import { UserMenuComponent } from './user-menu/user-menu.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    StatementComponent,
    ViewRequestFormComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:UserMenuComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: UserDashboardComponent },
          { path: 'viewRequestForm', component: ViewRequestFormComponent },
          { path: 'statement', component: StatementComponent },
          
        ],
      }
    ])
  ]
})
export class UserModule { }
