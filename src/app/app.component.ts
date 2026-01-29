import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular10-app';
  private myNumber: number = 20;

  get counter() {
    return this.myNumber;
  }

  set counter(value) {
    this.myNumber = value;
  }

  increment() {
    this.counter ++;
  }
  decrement() {
    this.counter--;
  }

}
