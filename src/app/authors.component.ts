import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  // templateUrl: './authors.component.html',
  template: `<ul>
  <li *ngFor="let author of authors">
    {{author}}
  </li>
</ul>`,
})
export class AuthorsComponent {
  authors; 

  constructor() {
      let service = new AuthorsService(); 
      this.authors = service.getAuthors();  
   }

  ngOnInit() {
    //test
  }

}
