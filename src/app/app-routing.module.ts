import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {TableManagementComponent} from './table-management/table-management.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'table', component: TableManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
