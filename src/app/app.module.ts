import { FavoritesComponent } from './favorites/favorites.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { TitleCaseComponent } from './title-case/title-case.component';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent, 
    AuthorsComponent,
    CoursesComponent,
    FavoritesComponent,
    TitleCaseComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
