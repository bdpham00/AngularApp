import { Http } from '@angular/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[]; 
  url: string = "http://jsonplaceholder.typicode.com/posts"; 
  constructor(@Inject(Http) private http) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json(); 
    });   
  }

  update(post) {
    this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json()); 
      }); 
    this.http.put(this.url, JSON.stringify({ isRead: true })); 
  }
}
