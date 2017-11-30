import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from '../auto-grow.directive'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService],
})

export class CoursesComponent implements OnInit {
  
  title = "Enter a course name: ";
  courses;
  service;
  
  constructor(coursesService : CoursesService) {
    this.service = coursesService;
    this.courses = coursesService.getCourses();
  }

  ngOnInit() { }
  
  public addCourse(course) {
      this.service.saveCourse(course);
      this.courses = this.service.getCourses();
  }

}
