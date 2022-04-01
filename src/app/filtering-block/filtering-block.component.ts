import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent  {
  @Input() isVisible?: boolean;

  constructor() { 
    
  }

  ngOnInit(): void {

  } 

}
