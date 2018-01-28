import { Component } from '@angular/core';
import { isFavoriteEventArgs } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title", 
    isFavorite: true,
  }

  onFavoriteChange(eventArgs: isFavoriteEventArgs) {
    console.log("Favorite Change: ", eventArgs); 
  }
}
