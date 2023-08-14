import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HideLayoutGuard } from './guards/hide-layout.guard';
import { BodyComponent } from './body/body.component';
import { AuthGuard } from './services/auth.guard';
import { Role } from './models/role';


const routes: Routes = [
 
 {
  path:'',
  component:BodyComponent
 },
 {
  path:'login',
  component:LoginComponent,
  
 },
 {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  canActivate: [AuthGuard], 
  data: { expectedRole: Role.Admin },
},
{
  path: 'employee',
  loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule),
  canActivate: [AuthGuard], 
  data: { expectedRole: Role.Employee },
},
{
  path: 'user',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  canActivate: [AuthGuard], 
  data: { expectedRole: Role.User },
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
