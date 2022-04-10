import { Component } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor(public sortServ: SortService) { }

  input = '';

  isVisibleResults = false;

  showResultsBlock(): void {
    if (this.input.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
    this.sortServ.checkResultsVisibility(this.isVisibleResults);
  }


  filtersIsVisible = false;

  toggleFilters(isVisible: boolean) {
    this.filtersIsVisible = isVisible;
  }

  sortedDates = '';

  changeDatesOrder(value: string) {
    this.sortedDates = value;
  }

  sortedViews = '';

  changeViewsOrder(value: string) {
    this.sortedViews = value;
  }

  searchInput = '';

  showsearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

}
