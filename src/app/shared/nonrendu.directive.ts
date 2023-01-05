import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonrendu]'
})
export class NonrenduDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor="red";
    el.nativeElement.style.border="3px solid black";
    el.nativeElement.style.padding="3px";
  }
  
}
