import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, 
    AuthorsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
