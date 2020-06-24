import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FrameComponent, HealthcheckComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [HealthcheckComponent]
})
export class AdminModule { }
