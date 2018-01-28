import { TitleCasePipe } from './title-case.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent, 
    AuthorsComponent,
    CoursesComponent,
    FavoritesComponent, 
    TitleCasePipe, PanelComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
