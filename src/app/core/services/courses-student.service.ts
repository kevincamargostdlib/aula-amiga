import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { linkCourse,unLinkCourse } from 'src/app/models/courses-student.model';
import { course } from 'src/app/models/courses.models';
import { AppSettingsService } from '../config/app-settings.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStudentService {

  constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) { }

  getCoursesStudent() {
    return this._utilityService.getQuery(this._appSettings.coursesStudent.action.getCoursesStudent)
      .pipe(map((res: any) => {
        return res.data.ar_cxs;
      }));
  }
  linkCourse(linkCourse:linkCourse) {
    return this._utilityService.postQuery(this._appSettings.coursesStudent.action.linkCourse,linkCourse)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  unLinkCourse(unLinkCourse:unLinkCourse) {
    return this._utilityService.postQuery(this._appSettings.coursesStudent.action.linkCourse,unLinkCourse)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
