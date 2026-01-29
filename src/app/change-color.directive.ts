import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = 'linear-gradient(180deg, #2193b0, #6dd5ed)';
  }

}
