import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, 
    // LoginComponent, ProfileComponent, 
    CommonModule,StudentDetailsComponent, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp';
  parentMsg = "This is message from parent";
}
