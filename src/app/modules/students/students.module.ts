import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { GridStudentsComponent } from './grid-students/grid-students.component';
import { FormStudentsComponent } from './form-students/form-students.component';


@NgModule({
  declarations: [
    GridStudentsComponent,
    FormStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
