import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { student } from 'src/app/models/students.models';
import { AppSettingsService } from '../config/app-settings.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) { }

  getStudents() {
    return this._utilityService.getQuery(this._appSettings.students.action.getStudents)
      .pipe(map((res: any) => {
        return res.data.ar_students;
      }));
  }
  updateStudents(student:student) {
    return this._utilityService.postQuery(this._appSettings.students.action.updateStudent,student)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
