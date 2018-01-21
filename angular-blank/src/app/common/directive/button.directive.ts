import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements AfterViewInit{

  constructor(private er: ElementRef, private renderer2: Renderer2) { }

  ngAfterViewInit() {
    this.renderer2.addClass(this.er.nativeElement, 'btn');
  }
}
