import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FrameComponent} from './admin/frame/frame.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: FrameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
