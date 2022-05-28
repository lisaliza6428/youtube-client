import { Component, Output, EventEmitter } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent  {

  constructor(public sortService: SortService) { }

  toggleSortDates() {
    this.sortService.toggleSortDates();
  }

  toggleSortViews() {
    this.sortService.toggleSortViews();
  }


  @Output() searchInput = new EventEmitter<string>();

  filter(e: KeyboardEvent){
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    this.sortService.checkFilterInput(value);
  }

}
