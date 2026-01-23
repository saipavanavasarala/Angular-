import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  public students:any = [];
  public errMsg:any;
  constructor(public _stdService: StudentService) {}

  ngOnInit() {
      this._stdService.getStudents().subscribe(
        data => this.students = data,
        error => this.errMsg = error
      )
  }

}
