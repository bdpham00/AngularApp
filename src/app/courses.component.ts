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
               
               <input (keyup.enter)="onKeyUp()" />
               `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;
    
    constructor() {
        let service = new CoursesService(); 
        this.courses = service.getCourses(); 
    }

    onKeyUp() {
        // if ($event.keyCode === 13) {
        //     console.log("ENTER was pressed"); 
        // }
        console.log("ENTER pressed"); 
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