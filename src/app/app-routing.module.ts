import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FrameComponent} from './admin/frame/frame.component';
import { HealthcheckComponent } from './admin/healthcheck/healthcheck.component';
import { CategoryComponent } from './admin/category/category.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: HealthcheckComponent},
  {path: 'category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
