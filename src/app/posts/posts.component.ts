import { Http } from '@angular/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[]; 
  constructor(@Inject(Http) private http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response.json(); 
    }) 
  }
  // http: Http; 

  // hello() {
  //   this.http.get('http://jsonplaceholder.typicode.com/posts')
  //   .subscribe(response => {
  //     console.log(response); 
  //   }) 
  // }
}
