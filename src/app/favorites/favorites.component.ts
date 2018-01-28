import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
}) 
export class FavoritesComponent implements OnInit{
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter(); 

  constructor() { }

  ngOnInit() {

  }

  onClick() {
     this.isSelected = !this.isSelected;
     this.click.emit({ newValue: this.isSelected }); 
  }

}

export interface isFavoriteEventArgs {
  newValue: boolean; 
}
