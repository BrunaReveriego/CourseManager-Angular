import {Component} from '@angular/core';
import { Course } from './course';
import {OnInit} from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    constructor (private CourseService:CourseService) {}

    ngOnInit(): void {
       this.courses = this.CourseService.retrieveAll();
    }

}