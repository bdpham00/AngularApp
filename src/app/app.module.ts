import { SignupFormComponent } from './signup-form/signup-form.component';
import { TitleCasePipe } from './title-case.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent, 
    AuthorsComponent,
    CoursesComponent,
    FavoritesComponent, 
    TitleCasePipe, 
    PanelComponent, 
    LikeComponent, 
    ZippyComponent, 
    CourseComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorsService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
