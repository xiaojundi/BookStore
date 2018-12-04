import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';
//using Renderer in any Dom manipulation
@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) { 
  }

  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
  }
}
