import { LikeComponent } from './like.component'; 
import { Component } from '@angular/core/src/metadata/directives';

let component = new LikeComponent(10, true); 
component.onClick(); 
console.log(component.likesCount); 