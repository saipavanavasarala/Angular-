import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   courseId:number;
  constructor(private activatedParam: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    // let paramUrl = parseInt(this.activatedParam.snapshot.paramMap.get('id'));
    // this.courseId = paramUrl;
    this.activatedParam.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.courseId = id;
    })
  }
  toPrevious() {
    let previousId;
    if(this.courseId >= 1) {
       previousId = this.courseId - 1;
    }
    this.route.navigate(['/course-list', previousId])
  }
  toNext() {
    let nextId = this.courseId + 1;
    this.route.navigate(['/course-list', nextId])
  }
  back() {
    let selectedId = this.courseId ? this.courseId : null;
    // this.route.navigate(['/course', {id: selectedId}])
    this.route.navigate(['../', {id:selectedId}], {relativeTo: this.activatedParam})
  }

  showDuration() {
    this.route.navigate(['duration'], {relativeTo: this.activatedParam})
  }
  showFee() {
    this.route.navigate(['fee'], {relativeTo: this.activatedParam})
  }

}
