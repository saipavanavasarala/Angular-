import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.modules';
import { ErrorComponent } from './error/error.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StudentComponent,
    ErrorComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
