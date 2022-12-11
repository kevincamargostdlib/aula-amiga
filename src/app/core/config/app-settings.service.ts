import { Injectable } from '@angular/core';
import { EndPoints } from './end-points';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {


    /**
     * @description: Gestión estudiantes.
    */
    public students = {
        action: {
            getStudents: EndPoints.urlBase('test_get_students'),
            updateStudent: EndPoints.urlBase('test_update_student'),
        }
    };

    /**
     * @description: Gestión cursos.
    */
    public courses = {
        action: {
            getCourses: EndPoints.urlBase('test_get_courses'),
        }
    };

    /**
     * @description: Gestión cursos y estudiantes.
    */
    public coursesStudent = {
        action: {
            getCoursesStudent: EndPoints.urlBase('test_get_courses_x_student'),
            linkCourse: EndPoints.urlBase('test_link_course'),
            unlinkCourse: EndPoints.urlBase('unlink_course'),
        }
    };

}