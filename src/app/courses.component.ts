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
               <div>
               <div (click)="onDivClicked()">
               <button (click)="onSave($event)">Save</button>
                </div>
               </div>
               
               <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />
               `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    isActive; 
    email = "bdpham00@gmail.com"; 
    
    constructor() {
        let service = new CoursesService(); 
        this.courses = service.getCourses(); 
        this.isActive = true; 
    }

    onKeyUp() {
        console.log(this.email); 
    }

    onSave($event) {
        //Prevents Event bubbling
        $event.stopPropagation(); 
        console.log("Button clicked!", $event); 
    }

    onDivClicked() {
        console.log("Div clicked"); 
    }
    
    getTitle() {
        return this.title; 
    }
}