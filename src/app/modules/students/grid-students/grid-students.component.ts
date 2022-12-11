import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { student } from 'src/app/models/students.models';

@Component({
  selector: 'app-grid-students',
  templateUrl: './grid-students.component.html',
  styleUrls: ['./grid-students.component.css']
})
export class GridStudentsComponent implements OnInit {

  public data: student[] = [];
  constructor(
    private _studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getListado();
  }


  private getListado(): void {
    this._studentsService.getStudents().subscribe((resp: any) => {
      this.data=Object.values(resp);
    })
  }


}
