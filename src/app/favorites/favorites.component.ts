import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { ViewEncapsulation } from '@angular/compiler/src/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Shadow DOM Most of the time will be emulated, do not use this property
}) 
export class FavoritesComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter(); 

  onClick() {
     this.isSelected = !this.isSelected;
     this.click.emit({ newValue: this.isSelected }); 
  }

}

export interface isFavoriteEventArgs {
  newValue: boolean; 
}
