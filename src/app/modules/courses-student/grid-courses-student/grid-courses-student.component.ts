import { Component, OnInit } from '@angular/core';
import { CoursesStudentService } from 'src/app/core/services/courses-student.service';
import { linkCourse, unLinkCourse } from 'src/app/models/courses-student.model';
import { code } from 'src/app/models/util.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grid-courses-student',
  templateUrl: './grid-courses-student.component.html',
  styleUrls: ['./grid-courses-student.component.css']
})
export class GridCoursesStudentComponent implements OnInit {

  public data: linkCourse[] = [];

  constructor(
    private _coursesStudentService: CoursesStudentService
  ) { }

  ngOnInit(): void {
    this.getListado();
  }


  private getListado(): void {
    this._coursesStudentService.getCoursesStudent().subscribe((resp: any) => {
      this.data = Object.values(resp);
    })
  }


  public delete(item: linkCourse) {
    let data: unLinkCourse = { code: code.candidate, cxs_id: item.cxs_id };

    Swal.fire({
      title: '¿Esta seguro de eliminar este curso para este estudiante?',

      showCancelButton: true,
      confirmButtonText: 'Si eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._coursesStudentService.unLinkCourse(data).subscribe((resp: any) => {
          debugger
        })
      }
    })
  }

}
