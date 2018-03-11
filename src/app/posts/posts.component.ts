import { PostService } from './../services/post.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[]; 
  constructor(@Inject(PostService) private service) {
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);  
        console.log(response.json()); 
      }, error => {
        alert("Unexpected error occured in delete"); 
        console.log(error); 
      }); 
  }

  patchPost(post) {
    this.service.patchPost(post).subscribe(response => {
      console.log(response); 
    }, error => {
      alert("Unexpected error occured in patch"); 
      console.log(error); 
    }); 
  }

  ngOnInit() {
    this.service.getPosts().
    subscribe(response => {
      this.posts = response.json(); 
    }, error => {
      alert("Unexpected error has occured"); 
      console.log(error); 
    })
  }
}
