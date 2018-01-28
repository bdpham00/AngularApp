import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styles: [
     `
      .glyphicon {
        color: green;
      }

      .gliphicon-star {
        background: black;
      }
     `
  ],
  styleUrls: ['./favorites.component.css'],
  //Angular selects order of last style declared in this component. However will favor styles declared in favorites.component.html
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
