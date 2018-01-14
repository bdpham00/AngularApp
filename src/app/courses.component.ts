import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: "+ title}}</h2>
               <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
               </ul>
               
               <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>`
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    isActive; 
    
    constructor() {
        let service = new CoursesService(); 
        this.courses = service.getCourses(); 
        this.isActive = true; 
    }
    
    getTitle() {
        return this.title; 
    }
}