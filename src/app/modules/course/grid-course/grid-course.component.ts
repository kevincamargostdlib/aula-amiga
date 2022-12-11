import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { course } from 'src/app/models/courses.models';

@Component({
  selector: 'app-grid-course',
  templateUrl: './grid-course.component.html',
  styleUrls: ['./grid-course.component.css']
})
export class GridCourseComponent implements OnInit {
  public data:course[]=[];
  constructor(
    private _coursesService:CoursesService
  ) { }

  ngOnInit(): void {
    this.getListado();
  }


  private getListado(): void {
    this._coursesService.getCourses().subscribe((resp: any) => {
      this.data=Object.values(resp);
  })
  }


    
    
  

}
