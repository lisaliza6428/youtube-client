import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent  {
  @Input() isVisibleResults?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
