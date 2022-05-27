/* eslint-disable import/named */
import { Directive, ElementRef, Input, Renderer2, OnInit   } from '@angular/core';

@Directive({
  selector: '[appCardBorderStyle]',
})
export class CardBorderStyleDirective implements OnInit {
  @Input('appCardBorderStyle') publishedString: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    const currentDate = new Date();
    const publishedDate = new Date(this.publishedString);
    const timeDiffrence = Math.abs(currentDate.getTime() - publishedDate.getTime());
    const days = Math.ceil(timeDiffrence / (1000 * 3600 * 24));
    let color = '';
    if (days <= 7) {
      color = 'green';
    } 
    if (days > 7 && days <= 31) {
      color = 'blue';
    } 
    if (days > 32) {
      color = 'red';
    }
    this.render.setStyle(this.elementRef.nativeElement, 'border-bottom', `solid 10px ${color}`);
  }
}
