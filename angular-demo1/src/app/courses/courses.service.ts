import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    courses = ["Course 1", "Course 2", "Course 3"];
    
    getCourses() : string[]{
        return this.courses;
    }
    
    saveCourse(course) {
        this.courses = this.courses.concat([course]);
    }
    
    constructor() { }
    
}
