import { Http } from '@angular/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[]; 
  url: string = "http://jsonplaceholder.typicode.com/posts"; 
  constructor(@Inject(Http) private http) {
  }

  delete(post) {
    this.http.delete(this.url + "/" + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);  
        console.log(response.json()); 
      }); 
  }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response => {
      this.posts = response.json(); 
    });   
  }
}
