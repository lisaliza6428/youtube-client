import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {


  input = '';

  isVisibleResults = false;

  showResultsBlock(): void {
    console.log('HI!');
    console.log(this.input.length);
    if (this.input.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
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
