import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridCourseComponent } from './grid-course/grid-course.component';

const routes: Routes = [
  {
    path:"",
    component:GridCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
