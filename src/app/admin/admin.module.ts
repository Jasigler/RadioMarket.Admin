import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';



@NgModule({
  declarations: [FrameComponent, HealthcheckComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
