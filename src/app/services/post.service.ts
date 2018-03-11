import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class PostService {
  url: string = "http://asdfjsonplaceholder.typicode.com/posts"; 
  constructor(@Inject(Http) private http) { }

  getPosts() {
    return this.http.get(this.url);   
  }

  deletePost(post) {
    return this.http.delete(this.url + "/" + post.id); 
  }

  patchPost(post) {
    return this.http.patch(this.url, { isRead: true }); 
  }
}
