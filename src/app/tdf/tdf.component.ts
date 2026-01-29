import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormRegisterService } from '../form-register.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  courses = ['Angular', 'React', 'Vue','Bootstrap']
  constructor(private regService : FormRegisterService) { }
  userModel = new User('Abhi','abhi@test.com', 'Developer','male','default', true);
  courseHasError = true;
  errorMsg:string ="";
  public submitted = false;
  ngOnInit(): void {
  }
  validateCourse(value) {
    if(value === 'default') {
      this.courseHasError = true;
    } else {
      this.courseHasError = false;
    }
  }
  onSubmit() {
    this.submitted = true;
    this.regService.enrol(this.userModel).subscribe(
      data => console.log("success!", data),
      error => this.errorMsg = error.statusText
    )
  }
}
