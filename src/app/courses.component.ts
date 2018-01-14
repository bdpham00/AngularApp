import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `{{ course.title }} <br />
                {{course.rating}} <br />
                {{course.students}} <br />
                {{course.price}} <br /> 
                {{course.releaseDate}}
               `
})
export class CoursesComponent {
    course = {
        title: "The complete Angular course", 
        rating: 4.45,
        students: 4321, 
        price: 150.90, 
        releaseDate: new Date(2018, 1, 23)
    }
}