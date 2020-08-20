import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [FrameComponent, HealthcheckComponent, CategoryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [HealthcheckComponent, FrameComponent]
})
export class AdminModule { }
