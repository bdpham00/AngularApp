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

  createPost(post) {
    this.service.createPost().
    subscribe(response => {
      post['id'] = response.json().id; 
      this.posts.splice(0, 0, post); 
    }, (error: Response) => {
      if(error.status == 400) {
        //If form was available
        // this.form.setErrors(error.json()); 
      }
      else {
        alert("Unexpected error occered"); 
        //Log to database
        console.log(error); 
      }
    })
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);  
        console.log(response.json()); 
      }, (error: Response) => {
        if(error.status == 404) {
          alert("This post has already been deleted"); 
        }
        else {
          alert("Unexpected error occured in delete"); 
          console.log(error); 
        } 
      }); 
  }

  patchPost(post) {
    this.service.patchPost(post).subscribe(
      response => {
      console.log(response); 
    }, error => {
      alert("Unexpected error occured in patch"); 
      console.log(error); 
    }); 
  }

  ngOnInit() {
    this.service.getPosts().
    subscribe(
      response => {
      this.posts = response.json(); 
    }, error => {
      alert("Unexpected error has occured"); 
      console.log(error); 
    })
  }
}
