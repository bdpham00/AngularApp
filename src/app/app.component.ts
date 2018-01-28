import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: "Title", 
  //   isFavorite: true,
  // }

  tweet = {
    body: 'Body of tweet', 
    isActive: true, 
    likesCount: 10
  }; 
}
