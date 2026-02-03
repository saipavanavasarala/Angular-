import { Component, OnInit, Input, OnChanges,SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
@Input() myNumber:number ;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    const newNumber: SimpleChange = changes.myNumber;
    console.log("ngOnChanges => Previous value : ", newNumber.previousValue);
    console.log("ngOnChanges => Current value : ", newNumber.currentValue);
  }
  ngOnInit(){
    console.log("ngOnInit => value : ", this.myNumber);
  }
  ngDoCheck() {
    console.log("ngDoCheck => value : ", this.myNumber);
    
  }
}
