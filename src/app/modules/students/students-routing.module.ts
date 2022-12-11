import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStudentsComponent } from './form-students/form-students.component';
import { GridStudentsComponent } from './grid-students/grid-students.component';

const routes: Routes = [
  {
    path:"",
    component:GridStudentsComponent
  },
  {
    path:"form/:id",
    component:FormStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
