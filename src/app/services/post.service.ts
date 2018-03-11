import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class PostService {
  url: string = "http://jsonplaceholder.typicode.com/posts"; 
  constructor(@Inject(Http) private http) { }

  createPost(post) {
    return this.http.post(this.url); 
  }

  getPosts() {
    return this.http.get(this.url);   
  }

  deletePost(id: number) {
    return this.http.delete(this.url + "/" + id); 
  }

  patchPost(post) {
    return this.http.patch(this.url, { isRead: true }); 
  }
}
