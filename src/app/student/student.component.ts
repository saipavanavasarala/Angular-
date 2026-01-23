import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public courses = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "React" },
    { "id": 3, "name": "Vue" },
    { "id": 4, "name": "Typescript" },
    { "id": 5, "name": "Bootstrap" },
  ]
  public selectedId;
  constructor(private router: Router, private activatedParam: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    this.activatedParam.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(x: any) {
    // this.router.navigate(['/course', x.id])
    this.route.navigate([x.id], {relativeTo: this.activatedParam})
  }
  isSelected(x) {
    return x.id === this.selectedId;
  }
}
