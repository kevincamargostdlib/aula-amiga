import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppSettingsService } from '../config/app-settings.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) { }

  getCourses() {
    return this._utilityService.getQuery(this._appSettings.courses.action.getCourses)
      .pipe(map((res: any) => {
        return res.data.ar_courses;
      }));
  }
}
