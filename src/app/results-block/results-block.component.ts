import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent  {
  @Input() sortedViews: string;

  @Input() sortedDates: string;

  @Input() searchInput: string;

  constructor() { }


}
