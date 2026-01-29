import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.modules';
import { ErrorComponent } from './error/error.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ChangeColorDirective } from './change-color.directive';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StudentComponent,
    ErrorComponent,
    CourseDetailsComponent,
    CourseDurationComponent,
    CourseFeeComponent,
    AdminHomeComponent,
    TdfComponent,
    ReactiveFormsComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
