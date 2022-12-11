import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridCoursesStudentComponent } from './grid-courses-student/grid-courses-student.component';

const routes: Routes = [
  {
    path: "",
    component: GridCoursesStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesStudentRoutingModule { }
