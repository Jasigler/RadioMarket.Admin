import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentPipe } from '../pipes/parent.pipe';




@NgModule({
  declarations: [FrameComponent, HealthcheckComponent, CategoryComponent, ParentPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HealthcheckComponent, FrameComponent]
})
export class AdminModule { }
