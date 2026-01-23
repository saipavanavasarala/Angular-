import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded credentials
  private readonly validUsername = 'admin';
  private readonly validPassword = '12345';

  login() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      alert('Login successful!');
      this.errorMessage = '';
      // Redirect to dashboard or another page if needed
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
