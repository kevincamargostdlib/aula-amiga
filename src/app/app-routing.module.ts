import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseModule } from './modules/course/course.module';
import { CoursesStudentModule } from './modules/courses-student/courses-student.module';
import { MainComponent } from './modules/layouts/main/main.component';
import { StudentsModule } from './modules/students/students.module';

const routes: Routes = [

  {path: '', pathMatch:'full',redirectTo:'students'},

  {
    path: 'course',
    component:MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => CourseModule
      },
    ]
  },
  {
    path: 'students',
    component:MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => StudentsModule
      },
    ]
  },
  {
    path: 'course-student',
    component:MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => CoursesStudentModule
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
