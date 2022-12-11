import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesStudentRoutingModule } from './courses-student-routing.module';
import { GridCoursesStudentComponent } from './grid-courses-student/grid-courses-student.component';


@NgModule({
  declarations: [
    GridCoursesStudentComponent
  ],
  imports: [
    CommonModule,
    CoursesStudentRoutingModule
  ]
})
export class CoursesStudentModule { }
