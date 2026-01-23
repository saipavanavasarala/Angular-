import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  public students:any = [];
  public errMsg:any;
  constructor(public _stdService: StudentService){}

  ngOnInit() {
    this._stdService.getStudents().subscribe(
      data => this.students = data,
      error => this.errMsg = error
    )

  }
}
