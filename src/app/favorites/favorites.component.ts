import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
}) 
export class FavoritesComponent implements OnInit{
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {

  }

  onClick() {
     this.isFavorite = !this.isFavorite;
  }

}
